import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import SmallCourseCard from './SmallCourseCard';
import '../index.css'


class ResponsiveTimetable extends Component {
    state = {  }
    render() { 
        return (
            <React.Fragment>
            <div className="search-course" style={{height:'100px'}}>
            </div>
            <div className='d-flex flex-column justify-content-between min-vh' style={{overflow : 'auto'}}>
            <h1 className='weekdays align-self-start mt-8   ' style={{fontSize :'160%'}}>شنبه</h1>
            <div className='responsive-course-container mb-8 ' >
                    <SmallCourseCard></SmallCourseCard>
                    <SmallCourseCard></SmallCourseCard>
                    <SmallCourseCard></SmallCourseCard>
                    <SmallCourseCard></SmallCourseCard>
                    <SmallCourseCard></SmallCourseCard>
                    <SmallCourseCard></SmallCourseCard>
                    <SmallCourseCard></SmallCourseCard>
                    <SmallCourseCard></SmallCourseCard>
            </div>
            <h1 className='weekdays align-self-start mt-8  ' style={{fontSize :'160%'}}>یکشنبه</h1>
            <div className='responsive-course-container mb-8 ' >
                    <SmallCourseCard></SmallCourseCard>
                    <SmallCourseCard></SmallCourseCard>
                    <SmallCourseCard></SmallCourseCard>
                    <SmallCourseCard></SmallCourseCard>
                    <SmallCourseCard></SmallCourseCard>
                    <SmallCourseCard></SmallCourseCard>
                    <SmallCourseCard></SmallCourseCard>
                    <SmallCourseCard></SmallCourseCard>
            </div>
            <h1 className='weekdays align-self-start mt-8  ' style={{fontSize :'160%'}}>دوشنبه</h1>
            <div className='responsive-course-container mb-8 ' >
                    <SmallCourseCard></SmallCourseCard>
                    <SmallCourseCard></SmallCourseCard>
                    <SmallCourseCard></SmallCourseCard>
                    <SmallCourseCard></SmallCourseCard>
                    <SmallCourseCard></SmallCourseCard>
                    <SmallCourseCard></SmallCourseCard>
                    <SmallCourseCard></SmallCourseCard>
                    <SmallCourseCard></SmallCourseCard>
            </div>
            <h1 className='weekdays align-self-start mt-8 ' style={{fontSize :'160%'}}>سه شنبه</h1>
            <div className='responsive-course-container mb-8 ' >
                    <SmallCourseCard></SmallCourseCard>
                    <SmallCourseCard></SmallCourseCard>
                    <SmallCourseCard></SmallCourseCard>
                    <SmallCourseCard></SmallCourseCard>
                    <SmallCourseCard></SmallCourseCard>
                    <SmallCourseCard></SmallCourseCard>
                    <SmallCourseCard></SmallCourseCard>
                    <SmallCourseCard></SmallCourseCard>
            </div>
            <h1 className='weekdays align-self-start mt-8  ' style={{fontSize :'160%'}}>چهرشنبه</h1>
            <div className='responsive-course-container mb-8 ' >
                    <SmallCourseCard></SmallCourseCard>
                    <SmallCourseCard></SmallCourseCard>
                    <SmallCourseCard></SmallCourseCard>
                    <SmallCourseCard></SmallCourseCard>
                    <SmallCourseCard></SmallCourseCard>
                    <SmallCourseCard></SmallCourseCard>
                    <SmallCourseCard></SmallCourseCard>
                    <SmallCourseCard></SmallCourseCard>
            </div>
            <h1 className='weekdays align-self-start mt-8' style={{fontSize :'160%'}}>پنجشنبه</h1>
            <div className='responsive-course-container mb-8' >
                    <SmallCourseCard></SmallCourseCard>
                    <SmallCourseCard></SmallCourseCard>
                    <SmallCourseCard></SmallCourseCard>
                    <SmallCourseCard></SmallCourseCard>
                    <SmallCourseCard></SmallCourseCard>
                    <SmallCourseCard></SmallCourseCard>
                    <SmallCourseCard></SmallCourseCard>
                    <SmallCourseCard></SmallCourseCard>
            </div>
            </div>
            </React.Fragment>
          );
    }
}
 
export default ResponsiveTimetable;