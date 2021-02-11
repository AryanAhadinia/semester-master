import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import person from '../person.jpg'
import MenuItem from './MenuItem';

class Sidebar extends Component {
    state = {  
        currentState : 1
    }


    render() { 
        return (
            <div className="drop sidebar" style={{width : '200px'}}>
                <img src={person} class="rounded-circle mx-auto d-block" alt="..." style={{width : '50%', paddingTop : '25%', paddingBottom : '25%'}}></img>
                <MenuItem item='داشبورد' selected={this.state.currentState === 1} onClick={() => this.handleCurrentState(1)}></MenuItem>
                <MenuItem item='برنامه ریزی' selected={this.state.currentState === 2} onClick={() => this.handleCurrentState(2)}></MenuItem>
                <MenuItem item='جدول دروس' selected={this.state.currentState === 3} onClick={() => this.handleCurrentState(3)}></MenuItem>
                <MenuItem item='خروج' selected={this.state.currentState === 4} onClick={() => this.handleCurrentState(4)}></MenuItem>
            </div>
          );
    }

    handleCurrentState = (state) => {
        this.setState({currentState : state})
    }
}
 
export default Sidebar;