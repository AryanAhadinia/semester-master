import React, { Component } from 'react';
import Sidebar from './components/Sidebar';
import Card from './components/Card';
import { Col, Row, Form } from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';
import Week from './components/Week';
import 'react-toastify/dist/ReactToastify.css';
import Departments from './components/Departments';
import TableContainer from './components/TableContainer';
import Timetable from './components/Timetable';
import courseService from './services/courseService';
import departmentService from './services/departmentService';
import { toast } from 'react-toastify';
import db from './services/db';
import './time-table.css';
import './background.css';
import './GradientBox.scss';
import InfoModal from './components/InfoModal';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from 'react-router-dom';
import ResponsiveTimetable from './components/ResponsiveTimetable';
import userService from './services/userService';
// import InfoModal from './components/InfoModal';

class App extends Component {
	state = {
		currentState: 1,
		hoveredCourse: null,
		courses: [],
	};

	addCourse = async (course) => {
		const saveState = this.state;
		const newCourse = { ...course };
		if (this.checkIfCourseAlreadyExists(newCourse)) {
			return;
		}
		this.checkIfTheNewCourseExamCorrupts(newCourse);
		const courses = [...this.state.courses, newCourse];
		this.setState({ courses });
		toast.dark('درس << ' + course.title + ' >> اضافه شد', {
			position: 'bottom-left',
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
		});
		try {
			await courseService.addCourseToSchedule(newCourse);
		} catch (ex) {
			if (ex.response && ex.response.status === 404)
				toast.error('مشکل در برقراری ارتباط!', {
					position: 'bottom-left',
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				});
			this.setState(saveState);
		}
	};

	checkIfTheNewCourseExamCorrupts = (newCourse) => {
		for (let course of this.state.courses) {
			if (
				newCourse.examTime !== '' &&
				newCourse.examTime === course.examTime
			) {
				toast.warn('امتحان این درس با دروس ثبت شده تداخل دارد', {
					position: 'bottom-left',
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				});
				return true;
			}
		}

		return false;
	};

	checkIfCourseAlreadyExists = (newCourse) => {
		for (let course of this.state.courses) {
			if (
				newCourse.courseId === course.courseId &&
				newCourse.groupId === course.groupId
			) {
				toast.error('این درس در برنامه شما وجود دارد! ', {
					position: 'bottom-left',
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				});
				return true;
			}
		}

		return false;
	};

	constructor() {
		super();
		this.modalRefrence = React.createRef();
		this.showModal = this.showModal.bind(this);
		this.init();
	}

	async init() {
		const { data: myCourses } = await courseService.getMyCourses();
		this.setState({ courses: myCourses });
		this.deleteIfExpired();
		const isThereAnyCourses = await db.courses.count();
		if (isThereAnyCourses === 0) {
			const { data: courses } = await courseService.getAllCourses();
			await courseService.populateCoursesOnDb(courses);
		}
		const isThereAnyDepartments = await db.departments.count();
		if (isThereAnyDepartments === 0) {
			const {
				data: departments,
			} = await departmentService.getAllDepartments();
			await departmentService.populateDepartmentsOnDb(departments);
		}
	}

	deleteIfExpired = async () => {
		await db.courses
			.where('timestamp')
			.below(new Date().getTime() - 86400000)
			.delete();
		await db.departments
			.where('timestamp')
			.below(new Date().getTime() - 86400000)
			.delete();
	};

	render() {
		return (
			<Router>
				<React.Fragment>
					<ToastContainer
						position='bottom-left'
						autoClose={5000}
						hideProgressBar={false}
						newestOnTop
						closeOnClick
						rtl
						pauseOnFocusLoss
						draggable
						pauseOnHover
					/>
					<div className='d-flex flex-row flex-fill h-100 overflow-hidden'>
						<Sidebar
							handleCurrentState={this.handleCurrentState}
							currentState={this.state.currentState}
						></Sidebar>
						<Col className='d-flex flex-column justify-content-start align-items-center flex-fill main-section overflow-hidden'>
							<div
								className='d-flex justify-content-between w-100 h-100'
								style={{ padding: '4%' }}
							>
								{/* {this.handleSidebar()} */}
								<Switch>
									<Route
										path='/dashboard'
										render={() => this.handleSidebar()}
									/>
									<Route
										path='/timetable'
										render={() => this.handleSidebar()}
									/>
									<Route
										path='/courseTable'
										render={() => this.handleSidebar()}
									/>
									<Route
										path='/'
										exact
										render={() => this.handleSidebar()}
									>
										<Redirect to='/index'></Redirect>
									</Route>
								</Switch>
							</div>
						</Col>
					</div>
				</React.Fragment>
			</Router>
		);
	}

	handleCurrentState = (state) => {
		this.setState({ currentState: state });
	};

	handleUpdateCourses = (state) => {
		this.setState({ courses: state });
	};

	handleUpdateHover = (state) => {
		console.log(state);
		this.setState({ hoveredCourse: state });
	};

	handleClearDB = () => {
		userService.deleteUserInfo();
	};

	showModal() {
		this.modalRefrence.current.handleClickOpen();
	}

	handleSidebar = () => {
		switch (this.state.currentState) {
			case 1:
				return (
					<React.Fragment>
						<Redirect to='/dashboard'></Redirect>
						<div className='w-100 overflow-hide d-flex flex-column justify-content-around'>
							<InfoModal ref={this.modalRefrence}></InfoModal>
							<button
								type='button'
								className='btn btn-dark mx-auto mb-3'
								id='info-form-button'
								data-toggle='modal'
								data-target='#myInfoModel'
								style={{
									fontSize: '3vh',
									borderRadius: '1vw',
									alignSelf: 'center',
								}}
								onClick={this.showModal}
							>
								ویرایش
							</button>
							<Card></Card>
						</div>
					</React.Fragment>
				);
			case 2:
				return (
					<React.Fragment>
						<Redirect to='/timetable'></Redirect>
						<Timetable
							courses={this.state.courses}
							handleUpdateCourses={this.handleUpdateCourses}
							hoveredCourse={this.state.hoveredCourse}
						>
							handleUpdateHover={this.handleUpdateHover}
						</Timetable>
						<div
							className='flex-grow-1 flex-shrink-1'
							id='department-parent'
						>
							<Departments
								handleUpdateHover={this.handleUpdateHover}
								onSelect={this.addCourse}
							></Departments>
						</div>
						<ResponsiveTimetable
							onSelect={this.addCourse}
							courses={this.state.courses}
						></ResponsiveTimetable>
					</React.Fragment>
				);
			case 3:
				return (
					<React.Fragment>
						<Redirect to='/courseTable'></Redirect>
						<TableContainer
							courses={this.state.courses}
							handleUpdateCourses={this.handleUpdateCourses}
						></TableContainer>
					</React.Fragment>
				);
			case 4:
				this.handleClearDB();
				return <Redirect to='/index'></Redirect>;

			default:
				return null;
		}
	};
}

export default App;
