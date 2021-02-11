import React, { Component } from 'react';


class MenuItem  extends Component {

    

    render() { 
        return (
            <div className='menu-item' style={{ backgroundColor : this.handleSelect()}} onClick={this.props.onClick}> {this.props.item}</div>
          );
    }

    handleSelect = () => {
        return this.props.selected ? ' rgba(255, 255, 255, 0.4)' : ' rgba(255, 255, 255, 0.05)' 
    }
}


 
export default MenuItem;