import React, { Component } from 'react';
import TableCard from './TableCard';
import '../time-table.css';
import Course from './Course';

class Timetable extends Component {

    state = { 
        height: 0,
        hoveredCourse : this.props.hoveredCourse,
        courses : this.props.courses
     };

     constructor(props) {
         super(props)
         this.state.courses = this.props.courses;
         this.state.hoveredCourse = props.hoveredCourse;
     }

     componentDidUpdate(prevProps) {
         if (prevProps.courses !== this.props.courses)
            this.setState({courses : this.props.courses})
        if (prevProps.hoveredCourse !== this.props.hoveredCourse)
            this.setState({hoveredCourse : this.props.hoveredCourse})
     }



    render() { 
        return (
            <div className="timetable-container d-flex flex-column justify-content-between w-100" id='timetable-container'>
                <div className='d-flex justify-content-between align-items-center w-100'>
                <h1 className='section-title'> جدول دروس</h1>
                <span className="badge badge-pill badge-light " style={{fontSize :'1.5vw'}}>{this.state.courses.map( c => c.courseUnits).reduce((a,b) => +a + +b)}</span>
                </div>
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

                    { this.state.hoveredCourse ? 
                        <TableCard key={this.state.hoveredCourse.courseNumber} course={this.state.hoveredCourse} handleDelete={this.handleDelete} column={this.state.hoveredCourse.column} row={this.state.hoveredCourse.row} duration={this.state.hoveredCourse.duration} color={this.state.hoveredCourse.color} courseName = {this.state.hoveredCourse.courseName} courseMaster = {this.state.hoveredCourse.courseMaster} courseNumber = {this.state.hoveredCourse.courseNumber}></TableCard>
                    : null}
            

                </div>
            </div>
          );
    }

    handleDelete = (course) => {
        const courses = this.state.courses.filter(c => c !== course);
        this.setState(courses)
        this.props.handleUpdateCourses(courses);
      }

    componentDidMount() {
        const height = document.getElementById('height-setter').clientHeight;
        this.setState({ height });
        console.log(height);
        console.log(height/26);
      }
}
 
export default Timetable;