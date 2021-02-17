import React, { Component } from 'react';
import db from '../services/db';
import departmentService from '../services/departmentService';
import userService from '../services/userService';
import Button from '@material-ui/core/Button';
import {
	Col,
	Form,
	Row,
	Modal,
	ModalBody,
	ModalHeader,
	ModalFooter,
} from 'react-bootstrap';

class InfoModal extends Component {
	state = {
		open: false,
		user: {},
		departments: [],
	};

	constructor(props) {
		super(props);
		this.state.open = false;
		this.init();
		this.state.user = {
			firstName: 'Ali',
			lastName: 'Mamadi',
			stdId: '231321323',
			depId: '40',
			grade: true,
		};
		// this.state.user = this.props.user;
	}

	init = async () => {
		const isThereAnyDepartments = await db.departments.count();
		if (isThereAnyDepartments === 0) {
			const {
				data: departments,
			} = await departmentService.getAllDepartments();
			await departmentService.populateDepartmentsOnDb(departments);
		}
		const departments = await db.departments.toArray();
		this.state.departments = departments;
	};

	setOpen = (newValue) => {
		this.setState({ open: newValue });
	};

	handleClickOpen = () => {
		this.setOpen(true);
	};

	handleClose = () => {
		this.setOpen(false);
	};

	handleChange = ({ currentTarget: input }) => {
		const user = { ...this.state.user };
		user[input.id] = input.value;
		this.setState({ user });
	};

	handleSubmit = (e) => {
		e.preventDefault();
		this.doSubmit();
		this.setOpen(false);
	};

	doSubmit = async () => {
		const { user } = this.state;
		await userService.updateMyInfo(user);
	};

	render() {
		return (
			<Modal show={this.state.open} id='myInfoModel'>
				<Modal.Header id='form-dialog-title'>اطلاعات</Modal.Header>
				<ModalBody>
					<Form onSubmit={this.handleSubmit}>
						<div className='form-group'>
							<label htmlFor='exampleInputEmail1'>
								نام خانوداگی
							</label>
							<input
								onChange={this.handleChange}
								type='name'
								className='form-control info-field'
								id='lastName'
								placeholder={this.state.user.lastName}
							/>
						</div>
						<div className='form-group'>
							<label htmlFor='exampleInputEmail1'>نام</label>
							<input
								onChange={this.handleChange}
								type='name'
								className='form-control info-field'
								id='firstName'
								placeholder={this.state.user.firstName}
							/>
						</div>
						<div className='form-group'>
							<label htmlFor='exampleInputEmail1'>
								شماره دانشجویی
							</label>
							<input
								onChange={this.handleChange}
								type='name'
								className='form-control info-field'
								id='stdId'
								placeholder={this.state.user.stdId}
							/>
						</div>
						<div className='form-group'>
							<label htmlFor='exampleInputEmail1'>
								رشته ‌تحصیلی
							</label>
							<select
								className='form-control'
								id='depId'
								onChange={this.handleChange}
							>
								{this.state.departments &&
									this.state.departments.length !== 0 &&
									this.state.departments.map((d) => (
										<option
											key={d.depId}
											value={d.depId}
											selected={
												d.depId ===
												this.state.user.depId
											}
										>
											{d.department}
										</option>
									))}
							</select>
						</div>
						<div className='form-group'>
							<label htmlFor='exampleInputEmail1'>
								مقطع تحصیلی
							</label>
							<select
								onChange={this.handleChange}
								defaultValue={this.state.user.grade ? 0 : 1}
								className='form-control'
								id='grade'
							>
								<option value={0}>کارشناسی</option>
								<option value={1}></option>
							</select>
						</div>
					</Form>
				</ModalBody>
				<ModalFooter>
						<button className="btn btn-dark" onClick={this.handleClose} color='primary'>
							بستن
						</button>
						<button className="btn btn-dark" onClick={this.handleSubmit} color='primary'>
							ثبت اطلاعات
						</button>
				 </ModalFooter>
			</Modal>
		);
	}
}

export default InfoModal;
