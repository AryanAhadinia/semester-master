import React, { Component } from 'react';

class Course extends Component {
    state = {  }
    
    render() { 
        return ( 
            <div onClick={() => this.props.onSelect(this.props.index)} className="course">
                نام درس
            </div>
         );
    }
}
 
export default Course;