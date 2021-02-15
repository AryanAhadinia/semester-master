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
            <div className='col overflow-auto'>
            <h1 className='weekdays mx text-right ' style={{fontSize :'160%', marginTop :'30px'}}>شنبه</h1>
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
            <h1 className='weekdays mx text-right   ' style={{fontSize :'160%', marginTop :'30px'}}>یکشنبه</h1>
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
            <h1 className='weekdays mx text-right   ' style={{fontSize :'160%' , marginTop :'30px'}}>دوشنبه</h1>
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
            <h1 className='weekdays mx text-right  ' style={{fontSize :'160%' , marginTop :'30px'}}>سه شنبه</h1>
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
            <h1 className='weekdays mx text-right   ' style={{fontSize :'160%', marginTop :'30px'}}>چهرشنبه</h1>
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
            <h1 className='weekdays mx text-right ' style={{fontSize :'160%', marginTop :'30px'}}>پنجشنبه</h1>
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