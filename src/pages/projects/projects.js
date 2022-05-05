import React, { Component } from 'react';
// import { gsap } from "gsap";
// import './projects.scss';
import Hero from '../../components/hero/hero';
class Projects extends Component {

  componentDidMount(){}

  render() {
    return (
      <article className="projects container">
        <section>
          {this.props.projectData.map((data, key) => {
            return (
              <div key={key}>
                <p className="art__stagger-in art__stagger-out">{data.title}</p>
              </div>
            );
          })}
        </section>
      </article>
    );
  }
}

export default Projects;
