import React, { Component } from 'react';
import CourseContainer from './CourseContainer';
import  db  from '../services/db';


class Deparment extends Component {
    state = { departments: undefined}

    constructor(){
       super()
       this.readDepartments()
    }

    readDepartments = async () => {
        const{ data : departments } = await db.departments ; 
        this.state.departments = departments
    }

    
    render() { 
        return (
            <div className='department-div d-flex flex-column justify-content-start align-items-center'>
                <select className="custom-select custom-select-lg mb-3" id='departments-select'>
                    <option selected>دانشکده</option>
                    {
                        this.state.departments && this.state.departments.map(dep => <option key={dep.depId} value={dep.depId}> dep.department </option>)
                    }
                </select>
                <CourseContainer handleUpdateHover={this.props.handleUpdateHover} onSelect={this.props.onSelect}>
                </CourseContainer>
            </div>
            );
    }
}
 
export default Deparment;

