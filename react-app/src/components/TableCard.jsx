import React, { Component } from 'react';

class TableCard extends Component {
    state = {  }
    render() { 
        return (
            <div className="course1 d-flex flex-column justify-content-between" style={{gridRow: this.props.row + "/ span " + this.props.duration , gridColumn: this.props.column, backgroundColor: this.props.color}}>
                <h2>{this.props.courseNumber}</h2>
                <h2>{this.props.courseName}</h2>
                <h3>{this.props.master}</h3>
            </div>
          );
    }
}
 
export default TableCard;