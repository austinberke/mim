import React, { Component } from 'react';
import './Box.css';

class Box extends React.Component {
  render() {
    return (
      <div className="Box">
        <div className="BoxTitle">
          {this.props.title}
        </div>
        <div className="BoxBody">
          {this.props.body}
        </div>
      </div>
    )
  }
}

export default Box;
