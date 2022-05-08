import React, { Component } from 'react';
// import { gsap } from "gsap";
// import './about.scss';

class About extends Component {

  componentDidMount(){}

  render() {
    return (
      <>
        <article className="about container">
          <section>
            <p className="art__stagger-in art__stagger-out">-About coming Soon-</p>
            <p className="art__stagger-in art__stagger-out">-This image is hosted with Google Drive-</p>
          </section>
          <section className="art__stagger-in art__stagger-out">
            {/* <img src="https://drive.google.com/uc?id=1ubBHG_8dIMnaFI2hRh5cLiIg-JNBxCWV" alt="Clifford avatar"/> */}
          </section>
        </article>
      </>
    );
  }
}

export default About;
