import React, { Component } from 'react';
import TableCard from './TableCard';
import '../time-table.css';
import Course from './Course';

class Timetable extends Component {

    state = { 
        height: 0,
        courses : this.props.courses
     };

     constructor(props) {
         super(props)
         this.state.courses = this.props.courses;
     }

     componentDidUpdate(prevProps, prevState) {
         if (prevProps.courses !== this.props.courses)
            this.setState({courses : this.props.courses})
     }

    render() { 
        return (
            <div className="timetable-container d-flex flex-column justify-content-between w-100" id='timetable-container'>
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

                    {this.state.courses.map(card => (
                        <TableCard key={card.courseNumber} course={card} handleDelete={this.handleDelete} column={card.column} row={card.row} duration={card.duration} color={card.color} courseName = {card.courseName} courseMaster = {card.courseMaster} courseNumber = {card.courseNumber}></TableCard>
                    ))}
            

                </div>
            </div>
          );
    }

    handleDelete = (course) => {
        const courses = [...this.state.courses];
        const newCourses = courses.filter(c => c !== course);
        this.setState({courses : newCourses})
        this.props.handleUpdateCourses(newCourses);
      }

    componentDidMount() {
        const height = document.getElementById('height-setter').clientHeight;
        this.setState({ height });
        console.log(height);
        console.log(height/26);
      }
}
 
export default Timetable;