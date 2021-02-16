import React, { Component } from 'react';
import CourseRow from './CourseRow'

class TableContainer extends Component {
    state = { 
      courses : this.props.courses
     }

    constructor(props) {
      super(props);
      this.state.courses = props.courses;
    }
    render() { 
        return (  
            <div className="table-container d-flex flex-column justify-content-start align-items-center">
              <div className='d-flex justify-content-between align-items-center w-100'>
                <h1 className='section-title'> جدول دروس</h1>
                <span className="badge badge-pill badge-light " style={{fontSize :'1.5vw'}}>{this.state.courses.map( c => c.duration).reduce((a,b) => +a + +b)}</span>
                </div>
                <table className="table">
                <thead>
                  <tr>
                    <th scope="col">حذف</th>
                    <th scope="col">شماره</th>
                    <th scope="col">نام درس</th>
                    <th scope="col">گروه</th>
                    <th scope="col">واحد</th>
                    <th scope="col">استاد</th>
                    <th scope="col">امتحان</th>
                    <th scope="col">اطلاعات</th>
                    <th scope="col">پیغام ثبت‌نام</th>
                  </tr>
                </thead>
                <tbody>
                  { this.state.courses.map( course => 
                  <CourseRow 
                  key={course.courseNumber}
                  courseNumber={	course.courseNumber}
                  courseName={course.courseName}
                  courseGroup={18}
                  courseUnit={1}
                  courseInfo='تربیت بدنی برادران (مجازی) اطلاعات بیشتر در سایت تربیت بدنی'
                  courseMessage='تربیت بدنی برادران (مجازی) اطلاعات بیشتر در سایت تربیت بدنی'
                  course={course}
                  handleDelete={this.handleDelete}
                  ></CourseRow>)
                    
                  }
                </tbody>
                </table>
             </div>
        );
    }

    handleDelete = (course) => {
      const courses = [...this.state.courses];
        const newCourses = courses.filter(c => c !== course);
        this.setState({courses : newCourses})
        this.props.handleUpdateCourses(newCourses);
    }
}
 
export default TableContainer;