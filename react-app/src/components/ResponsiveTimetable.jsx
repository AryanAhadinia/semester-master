import React, { Component } from 'react';
import SmallCourseCard from './SmallCourseCard';
import  db  from '../services/db';
import '../index.css'


class ResponsiveTimetable extends Component {
        state = { departments: undefined,
                selected : 0,
                departmentCourses : null,
                mycourses : null
        }
            
        constructor(props){
                   super(props)
                   this.readDepartments()
                   this.mycourses = props.courses ;
                }
            
         readDepartments = async () => {
                    const departments = await db.departments.toArray() ; 
                    console.log(departments)
                    this.state.departments = departments
                    this.setState({departments})
                }
            
         handleChange = ()=> {
                    const e = document.getElementById('department-select-responsive');
                    this.setState({selected : +e.value})
                }

        readDepartmentCourses = async (id) => {
                const departmentCourses = await db.courses.where('depId').equals(id + '').toArray() ; 
                this.setState({departmentCourses})
       }

        componentDidUpdate(prevProps, prevState) {
        if (prevProps.courses !== this.props.courses)
            this.setState({mycourses : this.props.courses})
        if (prevState.selected !== this.state.selected)
            this.readDepartmentCourses(this.state.selected)
        }

    render() { 
        return (
            <React.Fragment>
        <div className='h-100 w-100 timetable-responsive'>
            <div className="search-course d-flex  justify-content-around align-items-center p-3" >
              <div className='d-flex justify-content-center align-items-center'  style={{width : '40%'}}>
              <label className='flex-shrink-0 p-4'> دانشکده : </label>
            <select className="custom-select custom-select-lg responsive-select" id='department-select-responsive' onChange={this.handleChange}>
                <option selected>دانشکده</option>
                {
                   this.state.departments && this.state.departments.map(dep => <option key={dep.depId} value={dep.depId}> {dep.department} </option>)
                }
            </select>
            </div >
            <div className='d-flex justify-content-center align-items-center'  style={{width : '40%'}}>
            <label className='flex-shrink-0 p-4'> درس : </label>
            <select  disabled={this.state.selected ===0} className="custom-select custom-select-lg responsive-select" >
                <option selected>درس</option>
                {
                this.state.departmentCourses && 
                this.state.departmentCourses.map(c => <option key={c.courseId + c.groupId} value={c.courseId + c.groupId}> {c.title} </option>)
                }
            </select>
            </div >    
            </div>
            <div className='col overflow-auto responsive-timetable-container'>
            <h1 className='weekdays mx text-right ' style={{fontSize :'160%', marginTop :'30px'}}>شنبه</h1>
            <div className='responsive-course-container mb-8 ' >
                    {
                       this.state.mycourses &&   this.state.mycourses.filter( c => c.classTimeArray[0][0] === 0)
                       .map( c => <SmallCourseCard course={c}></SmallCourseCard>)   
                    }
            </div>
            <h1 className='weekdays mx text-right   ' style={{fontSize :'160%', marginTop :'30px'}}>یکشنبه</h1>
            <div className='responsive-course-container mb-8 ' >
                    {
                       this.state.mycourses &&   this.state.mycourses.filter( c => c.classTimeArray[0][0] === 1)
                       .map( c => <SmallCourseCard course={c}></SmallCourseCard>)   
                    }
            </div>
            <h1 className='weekdays mx text-right   ' style={{fontSize :'160%' , marginTop :'30px'}}>دوشنبه</h1>
            <div className='responsive-course-container mb-8 ' >
                    {
                       this.state.mycourses &&   this.state.mycourses.filter( c => c.classTimeArray[0][1] === 2)
                       .map( c => <SmallCourseCard course={c}></SmallCourseCard>)   
                    }
            </div>
            <h1 className='weekdays mx text-right  ' style={{fontSize :'160%' , marginTop :'30px'}}>سه شنبه</h1>
            <div className='responsive-course-container mb-8 ' >
            {
                       this.state.mycourses &&   this.state.mycourses.filter( c => c.classTimeArray[0][1] === 3)
                       .map( c => <SmallCourseCard course={c}></SmallCourseCard>)   
                    }
            </div>
            <h1 className='weekdays mx text-right   ' style={{fontSize :'160%', marginTop :'30px'}}>چهرشنبه</h1>
            <div className='responsive-course-container mb-8 ' >
            {
                       this.state.mycourses &&   this.state.mycourses.filter( c => c.classTimeArray[0][0] === 4)
                       .map( c => <SmallCourseCard course={c}></SmallCourseCard>)   
                    }
            </div>
            <h1 className='weekdays mx text-right ' style={{fontSize :'160%', marginTop :'30px'}}>پنجشنبه</h1>
            <div className='responsive-course-container mb-8' >
                    
            </div>
            </div>
            </div>
            </React.Fragment>
          );
    }
}
 
export default ResponsiveTimetable;