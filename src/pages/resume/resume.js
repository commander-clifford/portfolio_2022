import React, { Component } from 'react';
import './resume.scss';
import Hero from '../../components/hero/hero';
import Card from '../../components/card/card';
import ResumePDF from "../../assets/clifford-nelson-resume.pdf";


class Resume extends Component {

  componentDidMount(){
    console.log("resumeData",this.props.resumeData);
    console.log("educationData",this.props.educationData);
  }

  render() {
    return (
      <>

        <section className="art__stagger-in art__stagger-out download-link d-flex align-items-center justify-content-center">
          <a href={ResumePDF} target="_blank">
            Download the PDF  
          </a>
        </section>

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

            <section className="">
              <h1 className='w-border'>Education</h1>
            </section>

            {this.props.educationData.map((item,i) =>
              <section key={i} className="resume-item">
                
                <div className="resume-item__headline-block d-flex align-items-end justify-content-between">
                  <h2 className="headline">{item.level}</h2>
                  <p><i>{item.date}</i></p>
                </div>

                <div className="d-flex align-items-center justify-content- resume-item__employer-block">
                  <h3 className="text-uppercase">{item.school}</h3>
                </div>

                <p className="resume-item__description p-indent"><small>GPA:</small>&nbsp;<b>{item.gpa}</b></p>
                <p className="resume-item__description p-indent">{item.desc}</p>

                <div className="resume-item__badges">
                  <div className="wrapper">
                    {item.courses ? item.courses.map((course, j) =>
                      <span key={j} className="badge">{course}</span>
                    ) : null}
                  </div>
                </div>


              </section>
            )}

          </div>

        </article>
        
      </>
    );
  }
}

export default Resume;
