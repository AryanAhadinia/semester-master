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
            <div style={{overflowX : 'auto' , overflowY:'auto', height:'170vh'}}>
            <h1>شنبه</h1>
            <div className='responsive-course-container' style={{height:'200px'}}>
                    <SmallCourseCard></SmallCourseCard>
                    <SmallCourseCard></SmallCourseCard>
                    <SmallCourseCard></SmallCourseCard>
                    <SmallCourseCard></SmallCourseCard>
                    <SmallCourseCard></SmallCourseCard>
                    <SmallCourseCard></SmallCourseCard>
                    <SmallCourseCard></SmallCourseCard>
                    <SmallCourseCard></SmallCourseCard>
            </div>
            <h1>شنبه</h1>
            <div className='responsive-course-container' style={{height:'200px'}}>
                    <SmallCourseCard></SmallCourseCard>
                    <SmallCourseCard></SmallCourseCard>
                    <SmallCourseCard></SmallCourseCard>
                    <SmallCourseCard></SmallCourseCard>
                    <SmallCourseCard></SmallCourseCard>
                    <SmallCourseCard></SmallCourseCard>
                    <SmallCourseCard></SmallCourseCard>
                    <SmallCourseCard></SmallCourseCard>
            </div>
            <h1>شنبه</h1>
            <div className='responsive-course-container' style={{height:'200px'}}>
                    <SmallCourseCard></SmallCourseCard>
                    <SmallCourseCard></SmallCourseCard>
                    <SmallCourseCard></SmallCourseCard>
                    <SmallCourseCard></SmallCourseCard>
                    <SmallCourseCard></SmallCourseCard>
                    <SmallCourseCard></SmallCourseCard>
                    <SmallCourseCard></SmallCourseCard>
                    <SmallCourseCard></SmallCourseCard>
            </div>
            <h1>شنبه</h1>
            <div className='responsive-course-container' style={{height:'200px'}}>
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