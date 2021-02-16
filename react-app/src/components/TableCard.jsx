import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMinusCircle} from  '@fortawesome/free-solid-svg-icons'

class TableCard extends Component {
    state = {  }
    render() { 
        return (
            <div className="course-card d-flex flex-column align-items-center justify-content-around" style={{gridRow: this.props.row + "/ span " + this.props.duration , gridColumn: this.props.column, backgroundColor: this.props.color}}>
                <div className='delete-icon-timetable' >
                    <FontAwesomeIcon onClick={() => this.props.handleDelete(this.props.course)} icon={faMinusCircle} className='p-1 mx'/> 
                </div>
                <h2 className="class-attributes">{this.props.courseNumber}</h2>
                <h2 className="class-attributes">{this.props.courseName}</h2>
                <h3 className="class-attributes">{this.props.courseMaster}</h3>
            </div>
          );
    }
}
 
export default TableCard;