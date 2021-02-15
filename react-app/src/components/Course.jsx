import React, { Component } from 'react';

class Course extends Component {
    state = {  }
    
    render() { 
        return ( 
            <div onClick={() => this.props.onSelect("4", "6", "3", "rgba(200, 73, 48, 0.77)", "40222", "خر سواری", "ممدلی")} className="course">
                نام درس
            </div>
         );
    }
}
 
export default Course;