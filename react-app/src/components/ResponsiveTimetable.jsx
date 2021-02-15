import React, { Component } from 'react';
import SmallCourseCard from './SmallCourseCard';
import '../index.css'


class ResponsiveTimetable extends Component {
    state = {  }
    render() { 
        return (
            <React.Fragment>
        <div className='h-100 w-100 timetable-responsive'>
            <div className="search-course d-flex  justify-content-around align-items-center p-3" >
              <div className='d-flex justify-content-center align-items-center'  style={{width : '40%'}}>
              <label className='flex-shrink-0 p-4'> دانشکده : </label>
            <select className="custom-select custom-select-lg responsive-select">
                <option selected>دانشکده</option>
                <option value="1">برق</option>
                <option value="2">شیمی</option>
                <option value="3">کامپیوتر</option>
            </select>
            </div >
            <div className='d-flex justify-content-center align-items-center'  style={{width : '40%'}}>
            <label className='flex-shrink-0 p-4'> درس : </label>
            <select className="custom-select custom-select-lg responsive-select" >
                <option selected>درس</option>
                <option value="1">برق</option>
                <option value="2">شیمی</option>
                <option value="3">کامپیوتر</option>
            </select>
            </div >    
            </div>
            <div className='col overflow-auto responsive-timetable-container'>
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
            </div>
            </React.Fragment>
          );
    }
}
 
export default ResponsiveTimetable;