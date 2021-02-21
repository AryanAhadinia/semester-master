import React, { Component } from 'react';
import Sidebar from './components/Sidebar';
import Card from './components/Card';
import { Col, Row, Form } from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';
import './week.css';
import './pattern.min.css';
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
	Link,
	Redirect,
} from 'react-router-dom';
import ResponsiveTimetable from './components/ResponsiveTimetable';
import userService from './services/userService';

class App extends Component {
	state = {
		currentState: 1,
		hoveredCourse: undefined,
		courses: [],
		user: {},
	};

	addCourse = async (course) => {
		const saveState = this.state;
		const newCourse = { ...course };
		if (this.checkIfCourseAlreadyExists(newCourse)) {
			return;
		}
		await this.checkIfTheNewCourseExamCorrupts(newCourse);
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
	}

	async componentWillMount() {
		await this.init();
	}

	async init() {
		const isThereMyUser = await db.userInfo.count();
		if (isThereMyUser === 0) {
			const { data: user } = await userService.getMyUserInfo();
			await userService.saveUserInfo(user);
		}
		const myUser = await db.userInfo.get(0);
		this.setState({ user: myUser });
		const { data: myCourses } = await courseService.getMyCourses();
		const courseArray = await myCourses.map(
			async (c) =>
				await db.course.get({
					courseId: c.courseId,
					groupId: c.groupId,
				})
		);
		this.setState({ courses: courseArray });
		await this.deleteIfExpired();
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
										<Redirect to='/dashboard'></Redirect>
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
						<Link to='/dashboard'></Link>
						<div className='w-100 overflow-hide d-flex flex-column justify-content-around'>
							<InfoModal
								user={this.state.user}
								ref={this.modalRefrence}
							></InfoModal>
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
							<Card user={this.state.user}></Card>
						</div>
					</React.Fragment>
				);
			case 2:
				return (
					<React.Fragment>
						<Link to='/timetable'></Link>
						<Timetable
							courses={this.state.courses}
							handleUpdateCourses={this.handleUpdateCourses}
							hoveredCourse={this.state.hoveredCourse}
							handleUpdateHover={this.handleUpdateHover}
						></Timetable>
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
						<Link to='/courseTable'></Link>
						<TableContainer
							courses={this.state.courses}
							handleUpdateCourses={this.handleUpdateCourses}
						></TableContainer>
					</React.Fragment>
				);
			case 4:
				// this.handleClearDB();
				return <iframe id="2e6d627f-5b7c-4726-950b-df4454a99dad"
							   src="https://www.vectary.com/viewer/v1/?model=2e6d627f-5b7c-4726-950b-df4454a99dad&env=autumncrossing"
							   frameBorder="0" width="100%" height="480"></iframe>;

			default:
				return null;
		}
	};
}

export default App;
