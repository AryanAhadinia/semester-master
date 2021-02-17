import React, { Component } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import university from '../university-bulding.png';
import person from '../person.jpg';
import Tilt from 'react-parallax-tilt';
import '../index.css';
import imam from '../imamQoute.png';
import db from '../services/db';
import userService from '../services/userService';

class Card extends Component {
	state = {
		user: {},
	};

	constructor() {
		super();
		this.init();
	}

	async init() {
		const isThereMyUser = await db.userInfo.count();
		if (isThereMyUser === 0) {
			const { data: user } = await userService.getMyUserInfo();
			await userService.saveUserInfo(user);
		}
		const myUser = await db.userInfo.get(0);
		this.setState({ user: myUser });
	}
	render() {
		return (
			<React.Fragment>
				<Tilt>
					<div className='wrap d-flex flex-column justify-content-around '>
						<div className='drop drop1 mx' dir='rtl'>
							<Row
								className='card-bar'
								style={{
									backgroundColor: 'rgba(0, 0, 0, 0.2)',
								}}
							>
								<Col sm={8}>
									<div className='uni-name'>
										<div className='uni-name-farsi'>
											{' '}
											دانشگاه صنعتی شریف
										</div>
										<div className='uni-name-eng'>
											{' '}
											Sharif University Of Technology
										</div>
									</div>
								</Col>
								<Col sm={4}></Col>
							</Row>
							<Row style={{ height: '100%' }}>
								<Col className='uni-building' sm={2}>
									<img
										src={university}
										alt='university building'
										style={{
											height: '90%',
											position: 'absolute',
											opacity: '0.6',
											bottom: '-5px',
											right: '-5px',
										}}
									/>
								</Col>
								<Col className='uni-form' sm={7}>
									<Form>
										<div className='form-group'>
											<label htmlFor='exampleInputEmail1'>
												نام خانوداگی
											</label>
											<label
												type='name'
												className='form-control info-field'
												id='inputName'
											>
												{this.state.user &&
													this.state.user.lastName}
											</label>
										</div>
										<div className='form-group'>
											<label htmlFor='exampleInputEmail1'>
												نام
											</label>
											<label
												type='name'
												className='form-control info-field'
												id='inputName'
											>
												{this.state.user &&
													this.state.user.firstName}
											</label>
										</div>
										<div className='form-group'>
											<label htmlFor='exampleInputEmail1'>
												شماره دانشجویی
											</label>
											<label
												type='name'
												className='form-control info-field'
												id='inputName'
											>
												{this.state.user &&
													this.state.user.stdId}
											</label>
										</div>
										<div className='form-group'>
											<label htmlFor='exampleInputEmail1'>
												رشته ‌تحصیلی
											</label>
											<label
												className='info-field form-control'
												id='exampleFormControlSelect1'
											>
												کامپیوتر
											</label>
										</div>
										<div className='form-group'>
											<label htmlFor='exampleInputEmail1'>
												مقطع تحصیلی
											</label>
											<label
												type='name'
												className='form-control info-field'
												id='inputName'
											>
												{!this.state.user.grade
													? 'کارشناسی'
													: 'تحصیلات تکمیلی'}
											</label>
										</div>
									</Form>
								</Col>
								<Col
									sm={3}
									className='pattern-horizontal-lines-sm white'
									style={{
										padding: '0',
										zIndex: '-1',
										opacity: '0.9',
									}}
								>
									<img
										className='imam'
										src={imam}
										alt='Imam'
									/>
									<img
										className='person'
										src={person}
										alt='Person'
									/>
								</Col>
							</Row>
						</div>
					</div>
				</Tilt>
			</React.Fragment>
		);
	}
}

export default Card;
