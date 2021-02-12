import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import person from '../person.jpg'
import MenuItem from './MenuItem';
import Tilt from 'react-parallax-tilt';


class Sidebar extends Component {
  
    render() { 
        return (
            <div className="drop sidebar" style={{width : '200px'}}>
                <Tilt>
                <img src={person} class="rounded-circle mx-auto d-block" alt="..." style={{width : '50%'}}></img>
                </Tilt>
                <MenuItem item='داشبورد' selected={this.props.currentState === 1} onClick={() => this.props.handleCurrentState(1)}></MenuItem>
                <MenuItem item='برنامه ریزی' selected={this.props.currentState === 2} onClick={() => this.props.handleCurrentState(2)}></MenuItem>
                <MenuItem item='جدول دروس' selected={this.props.currentState === 3} onClick={() => this.props.handleCurrentState(3)}></MenuItem>
                <MenuItem item='خروج' selected={this.props.currentState === 4} onClick={() => this.props.handleCurrentState(4)}></MenuItem>
            </div>
          );
    }

    
}
 
export default Sidebar;