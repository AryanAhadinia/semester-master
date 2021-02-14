import React, { Component } from 'react';
import '../time-table.css';

class Timetable extends Component {
    state = {  }
    render() { 
        return (
            <div className="timetable-container d-flex flex-column justify-content-between w-100">
                <h1 className='section-title'> برنامه‌ریزی</h1>
                <div className="timetable">
                    
                    <h1 className="weekdays" style={{gridColumn: '2'}}>شنبه</h1>
                    <h1 className="weekdays" style={{gridColumn: '3'}}>یکشنبه</h1>
                    <h1 className="weekdays" style={{gridColumn: '4'}}>دوشنبه</h1>
                    <h1 className="weekdays" style={{gridColumn: '5'}}>سه‌شنبه</h1>
                    <h1 className="weekdays" style={{gridColumn: '6'}}>چهارشنبه</h1>
                    <h1 className="weekdays" style={{gridColumn: '7'}}>پنجشنبه</h1>
                    <div className="grid-col" style={{gridColumn: '2'}} >
                        <div className="empty-cell"></div>
                        <div className="empty-cell"></div>
                        <div className="empty-cell"></div>
                        <div className="empty-cell"></div>
                        <div className="empty-cell"></div>
                        <div className="empty-cell"></div>
                        <div className="empty-cell"></div>
                        <div className="empty-cell"></div>
                        <div className="empty-cell"></div>
                        <div className="empty-cell"></div>
                        <div className="empty-cell"></div>
                        <div className="empty-cell"></div>
                        <div className="empty-cell"></div>
                        <div className="empty-cell"></div>
                    </div>
                    <div className="grid-col" style={{gridColumn: '3'}}>
                        <div className="empty-cell"></div>
                        <div className="empty-cell"></div>
                        <div className="empty-cell"></div>
                        <div className="empty-cell"></div>
                        <div className="empty-cell"></div>
                        <div className="empty-cell"></div>
                        <div className="empty-cell"></div>
                        <div className="empty-cell"></div>
                        <div className="empty-cell"></div>
                        <div className="empty-cell"></div>
                        <div className="empty-cell"></div>
                        <div className="empty-cell"></div>
                        <div className="empty-cell"></div>
                        <div className="empty-cell"></div>
                    </div>
                    <div className="grid-col" style={{gridColumn: '4'}}>
                        <div className="empty-cell">

                        </div>
                        <div className="empty-cell"></div>
                        <div className="empty-cell"></div>
                        <div className="empty-cell"></div>
                        <div className="empty-cell"></div>
                        <div className="empty-cell"></div>
                        <div className="empty-cell"></div>
                        <div className="empty-cell"></div>
                        <div className="empty-cell"></div>
                        <div className="empty-cell"></div>
                        <div className="empty-cell"></div>
                        <div className="empty-cell"></div>
                        <div className="empty-cell"></div>
                        <div className="empty-cell"></div>
                    </div>
                    <div className="grid-col" style={{gridColumn: '5'}}>
                        <div className="empty-cell"></div>
                        <div className="empty-cell"></div>
                        <div className="empty-cell"></div>
                        <div className="empty-cell"></div>
                        <div className="empty-cell"></div>
                        <div className="empty-cell"></div>
                        <div className="empty-cell"></div>
                        <div className="empty-cell"></div>
                        <div className="empty-cell"></div>
                        <div className="empty-cell"></div>
                        <div className="empty-cell"></div>
                        <div className="empty-cell"></div>
                        <div className="empty-cell"></div>
                        <div className="empty-cell"></div>
                    </div>
                    <div className="grid-col" style={{gridColumn: '6'}}>
                        <div className="empty-cell"></div>
                        <div className="empty-cell"></div>
                        <div className="empty-cell"></div>
                        <div className="empty-cell"></div>
                        <div className="empty-cell"></div>
                        <div className="empty-cell"></div>
                        <div className="empty-cell"></div>
                        <div className="empty-cell"></div>
                        <div className="empty-cell"></div>
                        <div className="empty-cell"></div>
                        <div className="empty-cell"></div>
                        <div className="empty-cell"></div>
                        <div className="empty-cell"></div>
                        <div className="empty-cell"></div>
                    </div>
                    <div className="grid-col" style={{gridColumn: '7'}}>
                        <div className="empty-cell"></div>
                        <div className="empty-cell"></div>
                        <div className="empty-cell"></div>
                        <div className="empty-cell"></div>
                        <div className="empty-cell"></div>
                        <div className="empty-cell"></div>
                        <div className="empty-cell"></div>
                        <div className="empty-cell"></div>
                        <div className="empty-cell"></div>
                        <div className="empty-cell"></div>
                        <div className="empty-cell"></div>
                        <div className="empty-cell"></div>
                        <div className="empty-cell"></div>
                        <div className="empty-cell"></div>
                    </div>
                    <label htmlFor="" className="clock">7:00</label>
                    <label htmlFor="" className="clock">8:00</label>
                    <label htmlFor="" className="clock">9:00</label>
                    <label htmlFor="" className="clock">10:00</label>
                    <label htmlFor="" className="clock">11:00</label>
                    <label htmlFor="" className="clock">12:00</label>
                    <label htmlFor="" className="clock">13:00</label>
                    <label htmlFor="" className="clock">14:00</label>
                    <label htmlFor="" className="clock">15:00</label>
                    <label htmlFor="" className="clock">16:00</label>
                    <label htmlFor="" className="clock">17:00</label>
                    <label htmlFor="" className="clock">18:00</label>
                    <label htmlFor="" className="clock">19:00</label>
                    <label htmlFor="" className="clock">20:00</label>

                    
                    {/*<div className="empty-cell"></div>
                    <div className="empty-cell"></div>
                    <div className="empty-cell"></div>
                    <div className="empty-cell"></div>
                    <div className="empty-cell"></div>
                    <div className="empty-cell"></div>
                    <div className="empty-cell"></div>
                    <div className="empty-cell"></div>
                    <div className="empty-cell"></div>
                    <div className="empty-cell"></div>
                    <div className="empty-cell"></div>
                    <div className="empty-cell"></div>
                    <div className="empty-cell"></div>
                    <div className="empty-cell"></div>
                    <div className="empty-cell"></div>
                    <div className="empty-cell"></div>
                    <div className="empty-cell"></div>
                    <div className="empty-cell"></div>
                    <div className="empty-cell"></div>
                    <div className="empty-cell"></div>
                    <div className="empty-cell"></div>
                    <div className="empty-cell"></div>
                    <div className="empty-cell"></div>
                    <div className="empty-cell"></div>
                    <div className="empty-cell"></div>
                    <div className="empty-cell"></div>
                    <div className="empty-cell"></div>
                    <div className="empty-cell"></div>
                    <div className="empty-cell"></div>
                    <div className="empty-cell"></div>
                    <div className="empty-cell"></div>
                    <div className="empty-cell"></div>
                    <div className="empty-cell"></div>
                    <div className="empty-cell"></div>
                    <div className="empty-cell"></div>
                    <div className="empty-cell"></div>
                    <div className="empty-cell"></div>
                    <div className="empty-cell"></div>
                    <div className="empty-cell"></div>
                    <div className="empty-cell"></div>
                    <div className="empty-cell"></div>
                    <div className="empty-cell"></div>
                    <div className="empty-cell"></div>
                    <div className="empty-cell"></div>
                    <div className="empty-cell"></div>
                    <div className="empty-cell"></div>
                    <div className="empty-cell"></div>
                    <div className="empty-cell"></div>
                    <div className="empty-cell"></div>
                    <div className="empty-cell"></div>
                    <div className="empty-cell"></div>
                    <div className="empty-cell"></div>
                    <div className="empty-cell"></div>
                    <div className="empty-cell"></div>
                    <div className="empty-cell"></div>
                    <div className="empty-cell"></div>
                    <div className="empty-cell"></div>
                    <div className="empty-cell"></div>
                    <div className="empty-cell"></div>
                    <div className="empty-cell"></div>
                    <div className="empty-cell"></div>
                    <div className="empty-cell"></div>
                    <div className="empty-cell"></div>
                    <div className="empty-cell"></div>
                    <div className="empty-cell"></div>
                    <div className="empty-cell"></div>
                    <div className="empty-cell"></div>
                    <div className="empty-cell"></div>
                    <div className="empty-cell"></div>
                    <div className="empty-cell"></div>
                    <div className="empty-cell"></div>
                    <div className="empty-cell"></div>
                    <div className="empty-cell"></div>
                    <div className="empty-cell"></div>
                    <div className="empty-cell"></div>
                    <div className="empty-cell"></div>
                    <div className="empty-cell"></div>
                    <div className="empty-cell"></div>
                    <div className="empty-cell"></div>
                    <div className="empty-cell"></div>
                    <div className="empty-cell"></div>
                    <div className="empty-cell"></div>
                    <div className="empty-cell"></div>
                    <div className="empty-cell"></div>
                    <div className="empty-cell"></div>
                    <div className="empty-cell"></div>
                    <div className="empty-cell"></div>
                    <div className="empty-cell"></div>
                    <div className="empty-cell"></div>
                    <div className="empty-cell"></div>
                    <div className="empty-cell"></div>
                    <div className="empty-cell"></div>
                    <div className="empty-cell"></div>
                    <div className="empty-cell"></div>
                    <div className="empty-cell"></div>
                    <div className="empty-cell"></div>
                    <div className="empty-cell"></div>
                    <div className="empty-cell"></div>
                    <div className="empty-cell"></div>
                    <div className="empty-cell"></div>
                    <div className="empty-cell"></div>
                    <div className="empty-cell"></div>
                    <div className="empty-cell"></div>
                    <div className="empty-cell"></div>
                    <div className="empty-cell"></div>
                    <div className="empty-cell"></div>
                    <div className="empty-cell"></div>
                    <div className="empty-cell"></div>
                    <div className="empty-cell"></div>
                    <div className="empty-cell"></div>
                    <div className="empty-cell"></div>
                    <div className="empty-cell"></div>
                    <div className="empty-cell"></div>
                    <div className="empty-cell"></div>
                    <div className="empty-cell"></div>
                    <div className="empty-cell"></div>
                    <div className="empty-cell"></div>
                    <div className="empty-cell"></div>
                    <div className="empty-cell"></div>
                    <div className="empty-cell"></div>
                    <div className="empty-cell"></div>
                    <div className="empty-cell"></div>
                    <div className="empty-cell"></div>
                    <div className="empty-cell"></div>
                    <div className="empty-cell"></div>
                    <div className="empty-cell"></div>
                    <div className="empty-cell"></div>
                    <div className="empty-cell"></div>
                    <div className="empty-cell"></div>
                    <div className="empty-cell"></div>
                    <div className="empty-cell"></div>
                    <div className="empty-cell"></div>
                    <div className="empty-cell"></div>
                    <div className="empty-cell"></div>
                    <div className="empty-cell"></div>
                    <div className="empty-cell"></div>
                    <div className="empty-cell"></div>
                    <div className="empty-cell"></div>
                    <div className="empty-cell"></div>
                    <div className="empty-cell"></div>
                    <div className="empty-cell"></div>
                    <div className="empty-cell"></div>
                    <div className="empty-cell"></div>
                    <div className="empty-cell"></div>
                    <div className="empty-cell"></div>
                    <div className="empty-cell"></div>
                    <div className="empty-cell"></div>
                    <div className="empty-cell"></div>
                    <div className="empty-cell"></div>
                    <div className="empty-cell"></div>
                    <div className="empty-cell"></div>
                    <div className="empty-cell"></div>
                    <div className="empty-cell"></div>
                    <div className="empty-cell"></div>
                    <div className="empty-cell"></div>
                    <div className="empty-cell"></div>
        <div className="empty-cell"></div>*/}
                    <div className="course1 d-flex flex-column justify-content-between">
                        <h2>course number</h2>
                        <h2>course name</h2>
                        <h3>master</h3>
                    </div>
                    <div className="course2 d-flex flex-column justify-content-between">
                        <h2>course number</h2>
                        <h2>course name</h2>
                        <h3>master</h3>

                    </div>

                </div>
            </div>
          );
    }
}
 
export default Timetable;