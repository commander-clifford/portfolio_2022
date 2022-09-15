import React, { Component } from 'react';
import Hero from '../../components/hero/hero';
import Blockquote from '../../components/blockquote/blockquote';
import '../resume/resume.scss';
class Projects extends Component {
  
  constructor(props) {
    super(props);
    this.webProjects = this.props.projectData.filter(project => project.type === "web");
    this.otherProjects = this.props.projectData.filter(project => project.type !== "web");
  }

  componentDidMount(){}

  render() {
    return (
      <article className="resume projects container container-sm">

        <section className="art__stagger-in art__stagger-out">
          <h1 className="w-border ">Web Projects</h1>
        </section>

        <section>
          {this.webProjects.map((data, i) => {
            return (
              <div className="resume-item art__stagger-in art__stagger-out" key={i}>
                <div className="resume-item__headline-block">
                  <h2 className="headline">{data.title}</h2>
                </div>
                <div className="d-flex align-items-center justify-content- resume-item__employer-block">
                  <a href={data.url} target="_blank">{data.url}</a>
                </div>
                <p className="resume-item__description p-indent">{data.description}</p>
              </div>
            );
          })}
        </section>

        <section className="art__stagger-in art__stagger-out">
          <h1 className="w-border ">Other Projects</h1>
        </section>

        <section className="">
          <Blockquote>
            I'm still working on this section, <a href="mailto:cliffordRyanNelson@gmail.com?subject=I saw your webpage!"> send me a message</a> in the mean time.
          </Blockquote>
        </section>

        <section className="art__stagger-in art__stagger-out">
          {this.otherProjects.map((data, key) => {
            return (
              <div key={key}>
                <p className="art__stagger-in art__stagger-out">{data.title}</p>
              </div>
            );
          })}
        </section>

        {/* <section className="art__stagger-in art__stagger-out">
          <p className="">-This image is hosted with Google Drive-</p>
          <img src="https://drive.google.com/uc?id=1ubBHG_8dIMnaFI2hRh5cLiIg-JNBxCWV" alt="Clifford avatar"/>
        </section> */}

      </article>
    );
  }
}

export default Projects;