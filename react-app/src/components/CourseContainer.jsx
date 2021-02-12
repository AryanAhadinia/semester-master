import React, { Component } from 'react';
import Course from './Course';

class CourseContainer extends Component {
    state = {  }
    render() { 
        return (
            <div className="courses-container d-flex flex-column justify-content-start align-items-center">
                <Course></Course>
                <Course></Course>
                <Course></Course>
                <Course></Course>
            </div>
          );
    }
}
 
export default CourseContainer;