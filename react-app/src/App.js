import React, { Component } from 'react';
import Sidebar from './components/Sidebar';
import Card from './components/Card';
import { Col, Row } from 'react-bootstrap';
import Week from './components/Week';
import logo from './termix.png';
import Departments from './components/Departments';
import TableContainer from './components/TableContainer';
import Timetable from './components/Timetable';
import './time-table.css';
import './background.css';
import './GradientBox.scss';

import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from 'react-router-dom';
import ResponsiveTimetable from './components/ResponsiveTimetable';

class App extends Component {
	state = {
		currentState: 1,
	};

	render() {
		return (
			<Router>
				<React.Fragment>
					<div className='d-flex flex-row flex-fill h-100'>
						<Sidebar
							handleCurrentState={this.handleCurrentState}
							currentState={this.state.currentState}></Sidebar>
						<Col className='d-flex flex-column justify-content-start align-items-center flex-fill main-section'>
							<div
								className='d-flex justify-content-between w-100 h-100'
								style={{ padding: '4%' }}>
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
										render={() => this.handleSidebar()}>
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

	handleSidebar = () => {
		switch (this.state.currentState) {
			case 1:
				return (
					<React.Fragment>
						<Redirect to='/dashboard'></Redirect>
						<div className='w-100'>
							<Card></Card>
						</div>
					</React.Fragment>
				);
			case 2:
				return (
					<React.Fragment>
						<Redirect to='/timetable'></Redirect>
						<Timetable></Timetable>
						<div
							className='flex-grow-1 flex-shrink-1'
							id='department-parent'>
							<Departments></Departments>
						</div>
						<ResponsiveTimetable></ResponsiveTimetable>
					</React.Fragment>
				);
			case 3:
				return (
					<React.Fragment>
						<Redirect to='/courseTable'></Redirect>
						<TableContainer></TableContainer>
					</React.Fragment>
				);
			case 4:
				return null;

			default:
				return null;
		}
	};
}

export default App;
