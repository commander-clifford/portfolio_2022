import React, { Component } from 'react';
// import { gsap } from "gsap";
import './resume.scss';
// import positions from './positions'

import Hero from '../components/hero';

class Resume extends Component {

  // constructor(props) {
  //   super(props);
  // }

  componentDidMount(){
    console.log("resumeData",this.props.resumeData);
  }

  listOfPositions(){

  }

  render() {
    return (
      <div>
        <Hero></Hero>
        <article className="resume container">

        <section className="art__stagger-in">
          <h1>Professional Experience</h1>
        </section>
        {this.props.resumeData.map((item,i) =>

          <section className={i >= (this.props.resumeData.length - 4) ? "art__stagger-in resume-item" : "resume-item"}>

            <div className="resume-item__headline-block d-flex align-items-end justify-content-between">
              <h2 className="headline">{item.title}</h2>
              <p><i>{item.date}</i></p>
            </div>

            <div className="d-flex align-items-center justify-content- resume-item__employer-block">
              <h3 className="text-uppercase">{item.employer}</h3>&nbsp;
              {item.employerSecondary ? <p className=""><i>({item.employerSecondary})</i></p> : null}
            </div>

            <p className="resume-item__description p-indent">{item.jobDesc}</p>

            <div className="resume-item__badges">
              <div className="wrapper">
                {item.tags ? item.tags.map((tag, i) =>
                  <span className={tag.type ? (tag.type + " badge") : "badge"}>{tag.title}</span>
                ) : null}
              </div>
            </div>

          </section>

        ).reverse()}
        <section>
          <h1>Education</h1>
        </section>
      </article>
      </div>
    );
  }
}

export default Resume;
