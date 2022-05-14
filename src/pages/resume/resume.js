import React, { Component } from 'react';
import './resume.scss';
import Hero from '../../components/hero/hero';

class Resume extends Component {

  componentDidMount(){
    console.log("resumeData",this.props.resumeData);
    console.log("educationData",this.props.educationData);
  }

  render() {
    return (

        <article className="resume container container-sm">

          <div className=''>

            <section className="art__stagger-in art__stagger-out">
              <h1 className='w-border'>Professional Experience</h1>
            </section>

            {this.props.resumeData.map((item,i) =>
              <section key={i} className={i >= (this.props.resumeData.length - 4) ? "art__stagger-in art__stagger-out resume-item" : "resume-item"}>

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
                    {item.tags ? item.tags.map((tag, j) =>
                      <span key={j} className={tag.type ? (tag.type + " badge") : "badge"}>{tag.title}</span>
                    ) : null}
                  </div>
                </div>

              </section>
            ).reverse()}

            <section>
              <h2>Education</h2>
              <p>-Coming Soon-</p>
            </section>

          </div>

        </article>

    );
  }
}

export default Resume;
