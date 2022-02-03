import React, { Component } from 'react';
// import { gsap } from "gsap";

import './hero.scss';

class Hero extends Component {

  // constructor(props) {
  //   super(props);
  // }

  componentDidMount(){

  }

  render() {
    return (
      <section className="hero">
        <div className="hero__container container">

          <h1>
            <span className="small">Resume of</span>
            <span className="art__stagger-in">Clifford Nelson</span>
          </h1>

        </div>
      </section>
    );
  }
}

export default Hero;
