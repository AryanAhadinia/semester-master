import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMinusCircle} from  '@fortawesome/free-solid-svg-icons'
import { Textfit } from 'react-textfit';

class CourseRow extends Component {
    state = {  }
    render() { 
        return (
            <tr>
            <td className='delete-icon' >
            <FontAwesomeIcon onClick={() => this.props.handleDelete(this.props.course)} icon={faMinusCircle} className='p-1 mx'/> 
            </td>
            <td>{this.props.courseNumber}</td>
            <td>{this.props.courseName} </td>
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