import React, { Component } from 'react';
import Course from './Course';
import CourseContainer from './CourseContainer';

class Departments extends Component {
    state = {  }
    render() { 
        return (
        <div className='department-div d-flex flex-column justify-content-start align-items-center'>
            <select className="custom-select custom-select-lg mb-3">
                <option selected>دانشکده</option>
                <option value="1">برق</option>
                <option value="2">شیمی</option>
                <option value="3">کامپیوتر</option>
            </select>
            <CourseContainer onSelect={this.props.onSelect}>
            </CourseContainer>
        </div>
        );
    }
}
 
export default Departments;