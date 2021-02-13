import React, { Component } from 'react';

class CourseRow extends Component {
    state = {  }
    render() { 
        return (
            <tr>
            <td>
                <span class="badge badge-danger">x</span>
            </td>
            <td>{this.props.courseNumber}</td>
            <td>{this.props.courseName}</td>
            <td>{this.props.courseGroup}</td>
            <td>{this.props.courseUnit}</td>
            <td>{this.props.courseMaster}</td>
            <td>{this.props.courseExam}</td>
            <td>{this.props.courseInfo}</td>
            <td>{this.props.courseMessage}</td>
            </tr>
          );
    }
}
 
export default CourseRow;