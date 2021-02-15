import React, { Component } from 'react';
import '../time-table.css'

class SmallCourseCard extends Component {
    state = {  }
    render() { 
        return ( 
            <span>
            <div className="small-card-container">
                <span></span>
                <div className="small-card-content">
                    <h2> ساعت </h2>
                    <h1> نام درس</h1>
                    <h2> استاد </h2>
                    <h1>شماره درس</h1>
                </div>
            </div>
            </span>
          );
    }
}
 
export default SmallCourseCard;