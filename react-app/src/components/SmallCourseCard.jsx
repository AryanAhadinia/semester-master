import React, { Component } from 'react';
import '../time-table.css'

class SmallCourseCard extends Component {
    state = {  }
    render() { 
        return ( 
            <span>
            <div className="small-card-container">
                <span>
                    
                </span>
                <div className="small-card-content d-flex flex-column justify-content-center h-100">
                   <div className='col z-index-tooltip'>
                        <h1> سلام</h1>
                        <h1> سلام</h1>
                        <h1> سلام</h1>
                   </div>
                </div>
            </div>
            </span>
          );
    }
}
 
export default SmallCourseCard;