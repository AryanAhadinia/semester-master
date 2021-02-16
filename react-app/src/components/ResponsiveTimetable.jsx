import React, { Component } from 'react';
import SmallCourseCard from './SmallCourseCard';
import  db  from '../services/db';
import '../index.css'


class ResponsiveTimetable extends Component {
        state = { departments: undefined,
        departmentCourses : undefined}


        constructor(){
           super()
           this.readDepartments()
        }
    
        readDepartments = async () => {
            const{ data : departments } = await db.departments ; 
            this.state.departments = departments
        }
    
        handleChange = async (e) => {
                const{ data : departmentCourses } = await db.courses.where('depId').equals(e.target.value) ;  
                this.setState({departmentCourses})    
        }

    render() { 
        return (
            <React.Fragment>
        <div className='h-100 w-100 timetable-responsive'>
            <div className="search-course d-flex  justify-content-around align-items-center p-3" >
              <div className='d-flex justify-content-center align-items-center'  style={{width : '40%'}}>
              <label className='flex-shrink-0 p-4'> دانشکده : </label>
            <select className="custom-select custom-select-lg responsive-select">
                <option selected>دانشکده</option>
                {
                        this.state.departments && this.state.departments.map(dep => <option key={dep.depId} onClick={(e) => this.handleChange(e)} value={dep.depId}> dep.department </option>)
                }
            </select>
            </div >
            <div className='d-flex justify-content-center align-items-center'  style={{width : '40%'}}>
            <label className='flex-shrink-0 p-4'> درس : </label>
            <select className="custom-select custom-select-lg responsive-select" >
                <option selected>درس</option>
                {
                        this.state.departmentCourses && 
                        this.state.departmentCourses.map(c => <option key={c.courseId + c.groupId} value={c.courseId + c.groupId}> c.courseName </option>)
                }
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