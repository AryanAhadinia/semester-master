import React, { Component } from 'react';

class Course extends Component {
    state = { 
        course : {
            column: '6',
            row: '14',
            duration: '3',
            color: 'rgba(232, 73, 48, 0.3)',
            courseNumber: '406221',
            courseName: 'ساختمان داده',
            courseMaster: 'مسعود صدیقین',
        }
     }

     
    render() { 
        return ( 
            <div 
                onClick={() => this.props.onSelect(this.state.course)}
                onMouseOver={() => this.props.handleUpdateHover(this.state.course)}
                onMouseOut={() => this.props.handleUpdateHover(null)}
                className="course">
                نام درس
            </div>
         );
    }

}
 
export default Course;