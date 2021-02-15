import React, { Component } from 'react';

class TableCard extends Component {
    state = {  }
    render() { 
        return (
            <div className="course1 d-flex flex-column justify-content-between" style={{gridRow: this.props.row + "/ span " + this.props.duration , gridColumn: this.props.column, backgroundColor: this.props.color}}>
                <h2>course number</h2>
                <h2>course name</h2>
                <h3>master</h3>
            </div>
          );
    }
}
 
export default TableCard;