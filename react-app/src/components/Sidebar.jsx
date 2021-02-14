import React, { Component } from 'react';
import logo from '../termix.png'
import MenuItem from './MenuItem';


class Sidebar extends Component {
  
    render() { 
        return (
            <div className="drop sidebar" style={{width : '200px'}}>
                <img src={logo} class="mx-auto d-block" alt="termix" ></img>
                <MenuItem item='داشبورد' selected={this.props.currentState === 1} onClick={() => this.props.handleCurrentState(1)}></MenuItem>
                <MenuItem item='برنامه ریزی' selected={this.props.currentState === 2} onClick={() => this.props.handleCurrentState(2)}></MenuItem>
                <MenuItem item='جدول دروس' selected={this.props.currentState === 3} onClick={() => this.props.handleCurrentState(3)}></MenuItem>
                <MenuItem item='خروج' selected={this.props.currentState === 4} onClick={() => this.props.handleCurrentState(4)}></MenuItem>
            </div>
          );
    }

    
}
 
export default Sidebar;