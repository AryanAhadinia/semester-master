import React, { Component } from 'react';
import CourseRow from './CourseRow'

class TableContainer extends Component {
    state = {  }
    render() { 
        return (  
            <div className="table-container d-flex flex-column justify-content-start align-items-center">
                <h1 className='section-title'> جدول دروس</h1>
                <table class="table">
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
                    <CourseRow 
                    courseNumber={	30003}
                    courseName='تربیت بدنی'
                    courseGroup={18}
                    courseUnit={1}
                    courseInfo='تربیت بدنی برادران (مجازی) اطلاعات بیشتر در سایت تربیت بدنی'
                    courseMessage='تربیت بدنی برادران (مجازی) اطلاعات بیشتر در سایت تربیت بدنی'
                    ></CourseRow>
                    <CourseRow 
                    courseNumber={	30003}
                    courseName='تربیت بدنی'
                    courseGroup={18}
                    courseUnit={1}
                    courseInfo='تربیت بدنی برادران (مجازی) اطلاعات بیشتر در سایت تربیت بدنی'
                    courseMessage='تربیت بدنی برادران (مجازی) اطلاعات بیشتر در سایت تربیت بدنی'
                    ></CourseRow>
                    <CourseRow 
                    courseNumber={	30003}
                    courseName='تربیت بدنی'
                    courseGroup={18}
                    courseUnit={1}
                    courseInfo='تربیت بدنی برادران (مجازی) اطلاعات بیشتر در سایت تربیت بدنی'
                    courseMessage='تربیت بدنی برادران (مجازی) اطلاعات بیشتر در سایت تربیت بدنی'
                    ></CourseRow>
                </tbody>
                </table>
             </div>
        );
    }
}
 
export default TableContainer;