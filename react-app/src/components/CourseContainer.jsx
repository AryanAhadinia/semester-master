import React, { Component } from 'react';
import Course from './Course';
import db from '../services/db';

class CourseContainer extends Component {
	state = {
		departmentCourses: null,
		inputValue: '',
	};

	constructor(props) {
		super();
		this.readDepartmentCourses(props.depId);
	}

	/*filterOnChange = (event) => {
        event.persist();
        (async () => {
            await this.setState({ inputValue : event.target.value });
            console.log('event', event.target);
        })();  



        console.log("changed");
        if(event != null){
            console.log("changed2");
        let filteredCourses = this.state.departmentCourses.filter(course => {
            return course.title.toLowerCase().includes(inputValue.toLocaleLowerCase());
        })
        this.setState({
            departmentCourses : filteredCourses
        });
    }
    
                <input type="text" placeholder="جستجو" onChange={(e) => this.filterOnChange(e)}></input>
    }*/

	readDepartmentCourses = async (id) => {
		const departmentCourses = await db.courses
			.where('depId')
			.equals(id + '')
			.toArray();
		console.log(departmentCourses);
		this.setState({ departmentCourses });
	};

	componentDidUpdate(prevProps) {
		if (prevProps.depId !== this.props.depId)
			this.readDepartmentCourses(this.props.depId);
	}

	render() {
		return (
			<div className='courses-container d-flex flex-column justify-content-start align-items-center'>
				{this.state.departmentCourses &&
					this.state.departmentCourses.map((course) => (
						<Course
							course={course}
							handleUpdateHover={this.props.handleUpdateHover}
							onSelect={this.props.onSelect}
						></Course>
					))}
			</div>
		);
	}
}

export default CourseContainer;
