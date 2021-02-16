import React, { Component } from 'react';
import Course from './Course';

class CourseContainer extends Component {
    state = {  }
    render() { 
        return (
            <div className="courses-container d-flex flex-column justify-content-start align-items-center">
                <Course   handleUpdateHover={this.props.handleUpdateHover} onSelect = {this.props.onSelect}></Course>
                <Course   handleUpdateHover={this.props.handleUpdateHover} onSelect = {this.props.onSelect}></Course>
                <Course   handleUpdateHover={this.props.handleUpdateHover} onSelect = {this.props.onSelect}></Course>
                <Course   handleUpdateHover={this.props.handleUpdateHover} onSelect = {this.props.onSelect}></Course>
            </div>
          );
    }
}
 
export default CourseContainer;