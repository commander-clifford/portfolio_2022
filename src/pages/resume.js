import React, { Component } from 'react';
import './resume.scss';
import Hero from '../components/hero';

class Resume extends Component {

  componentDidMount(){
    console.log("resumeData",this.props.resumeData);
  }

  render() {
    return (
      <div>

        <Hero></Hero>

        <article className="resume container">

          <section className="art__stagger-in">
            <h2>Professional Experience</h2>
          </section>

          {this.props.resumeData.map((item,i) =>
            <section className={i >= (this.props.resumeData.length - 4) ? "art__stagger-in resume-item" : "resume-item"}>

              <div className="resume-item__headline-block d-flex align-items-end justify-content-between">
                <h3 className="headline">{item.title}</h3>
                <p><i>{item.date}</i></p>
              </div>

              <div className="d-flex align-items-center justify-content- resume-item__employer-block">
                <h4 className="text-uppercase">{item.employer}</h4>&nbsp;
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
            <h2>Education</h2>
          </section>

        </article>
        
      </div>
    );
  }
}

export default Resume;
