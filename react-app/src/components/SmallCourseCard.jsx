import React, { Component } from 'react';
import '../time-table.css'

class SmallCourseCard extends Component {
    state = {  }
    render() { 
        return ( 
            <span>
            <div className="small-card-container">
                {/* <span>
                    
                </span> */}
                <div className="small-card-content d-flex flex-column justify-content-center align-items-start h-100">
  
                        <h1 className="class-time"> 10-11:30</h1>
                        <h1 className="class-name"> طراحی الگوریتم‌ها</h1>
                        <h1 className="class-master"> مسعود صدیقین</h1>
                        <h1 className="class-exam"> امتحان : 7 تیر 1400</h1>
               
                </div>
            </div>
            </span>
          );
    }
}
 
export default SmallCourseCard;