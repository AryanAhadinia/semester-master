import React, { Component } from 'react';

class Departments extends Component {
    state = {  }
    render() { 
        return (
        <div className='department-div'>
            <select class="custom-select custom-select-lg mb-3">
                <option selected>دانشکده</option>
                <option value="1">برق</option>
                <option value="2">شیمی</option>
                <option value="3">کامپیوتر</option>
            </select>
        </div>
        );
    }
}
 
export default Departments;