import React, { Component } from 'react';
// import { gsap } from "gsap";
// import './projects.scss';
import Hero from '../../components/hero/hero';
class Projects extends Component {

  componentDidMount(){}

  render() {
    return (
      <article className="projects container">
        <p>-Coming Soon-</p>
        <section>
          {this.props.projectData.map((data, key) => {
            return (
              <div key={key}>
                {data.title}
              </div>
            );
          })}
        </section>
      </article>
    );
  }
}

export default Projects;
