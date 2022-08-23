import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import './blockquote.scss';

class Blockquote extends Component {
  
  componentDidMount(){}

  render() {
    return (
      <blockquote className="blockquote">
        <div className="blockquote__container">
          {this.props.children}
        </div>
      </blockquote>
    );
  }
}

export default Blockquote;
