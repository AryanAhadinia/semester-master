import React, { Component } from 'react';
import TableCard from './TableCard';
import '../time-table.css';

class Timetable extends Component {
    state = { 
        height: 0
     };

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
                    <div className="grid-col"  id="height-setter" style={{gridColumn: '2'}} >
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

                    <TableCard column="5" row="8" duration="5" color="rgba(232, 73, 48, 0.77)"></TableCard>
                    <TableCard column="3" row="4" duration="5" color="rgba(128, 232, 48, 0.77)"></TableCard>
                    <TableCard column="3" row="7" duration="4" color="rgba(52, 48, 232, 0.77)"></TableCard>
                    <TableCard column="3" row="14" duration="4" color="rgba(232, 48, 217, 0.77)"></TableCard>

                </div>
            </div>
          );
    }

    componentDidMount() {
        const height = document.getElementById('height-setter').clientHeight;
        this.setState({ height });
        console.log(height);
        console.log(height/26);
      }
}
 
export default Timetable;