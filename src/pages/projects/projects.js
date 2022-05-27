import React, { Component } from 'react';
import Hero from '../../components/hero/hero';
import Blockquote from '../../components/blockquote/blockquote';
class Projects extends Component {
  
  constructor(props) {
    super(props);
    this.webProjects = this.props.projectData.filter(project => project.type === "web");
    this.otherProjects = this.props.projectData.filter(project => project.type !== "web");
  }

  componentDidMount(){}

  render() {
    return (
      <article className="projects container container-sm">

          <section className="art__stagger-in art__stagger-out">
            <Blockquote>
              I'm still working on this section, <a href="mailto:clifford.codes@gmail.com?subject=I saw your webpage!"> send me a message</a> in the mean time.
            </Blockquote>
          </section>

        <section className="art__stagger-in art__stagger-out">
          <h1 className="w-border ">Web Projects</h1>
        </section>

        <section className="art__stagger-in art__stagger-out">
          {this.webProjects.map((data, key) => {
            return (
              <div key={key}>
                <p className="art__stagger-in art__stagger-out">{data.title}</p>
              </div>
            );
          })}
        </section>

        <section className="art__stagger-in art__stagger-out">
          <h1 className="w-border ">Other Projects</h1>
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

        <section className="art__stagger-in art__stagger-out">
          <p className="">-This image is hosted with Google Drive-</p>
          <img src="https://drive.google.com/uc?id=1ubBHG_8dIMnaFI2hRh5cLiIg-JNBxCWV" alt="Clifford avatar"/>
        </section>

      </article>
    );
  }
}

export default Projects;
