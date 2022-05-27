import React, { Component } from 'react';
import { Link } from "react-router-dom";
// import { gsap } from "gsap";
// import './about.scss';
import Blockquote from '../../components/blockquote/blockquote';

class About extends Component {

  componentDidMount(){}

  render() {
    return (
      <>
        <article className="about container container-sm">

          <section className="art__stagger-in art__stagger-out">
            <Blockquote>
              Part developer, part designer, all of the above. From content production &amp; development to designing with code: I&nbsp;can&nbsp;do&nbsp;it&nbsp;all.
            </Blockquote>
          </section>

          <section className="art__stagger-in art__stagger-out">
            <h1 className="w-border ">About Me</h1>
          </section>

          <section className="art__stagger-in art__stagger-out">
            <p className="">
              My entire career has focused on digital media, from Broadcast Stations on board Navy Ships, to Digital TV and Web User Interfaces: I've had a wide range of experiences in the industry. 
              <br/>
              <br/>
              My enthusiasm has always been human computer interaction, products can be well engineered but successful products will be led by design. With my background in engineering and an education in Psychology and Design I bring this unique perspective to the table that blends engineering and design in harmony.
              <br/>
              <br/>
              As a design technologist I've found value in delivering design concepts as prototypes. Prototypes that are true to design intent such as user flows and design-system but lack the further engineering efforts that are required for the many app environments. This also helps with trying and scraping ideas rapidly - prototypes can be spun up quickly to test an idea that may or may not need further exploration. 
              <br/>
              <br/>
              My ideal role will be one that bridges the gap between design and development, working closely with all stakeholders including: design, engineering, and other key business stakeholders. While also staying active in the industry by leveraging and learning new technologies as they emerge. Part developer, part designer, all of the above. From content production &amp; development to designing with code: I can do it all.
            </p>
          </section>

          <section className="art__stagger-in art__stagger-out">
            <Blockquote>
              Check out my <Link to="/resume">resume</Link> to see where I've been.
            </Blockquote>
          </section>

          <section className="art__stagger-in art__stagger-out">
            <h1 className="w-border ">History</h1>
          </section>
          
          <section className="art__stagger-in art__stagger-out">
            <h2 className="">Naval Enlistment</h2>
            <p className="">
              I started my career with a tour in the Navy where I studied electrical engineering and worked hands-on in a wide variety of spaces. During my enlistment I learned a lot about electronics, complex systems, and teamwork. I later received an honorable discharge before accepting a civilian role. 
            </p>
          </section>

          <section className="art__stagger-in art__stagger-out">
            <h2 className="">Department of Defense</h2>
            <p className="">
              After my Navy tour, I joined a Department of Defense Contractor. There I worked on the Navy's shipboard CCTV systems as the lead engineer for prototyping and building the next generation of broadcast studio systems for larger Navy vessels.
            </p>
          </section>

          <section className="art__stagger-in art__stagger-out">
            <Blockquote>
              I earned a degree in Media Design and was the Valedictorian of my class with a 4.0.
            </Blockquote>
          </section>

          <section className="art__stagger-in art__stagger-out">
            <h2 className="">Back to School</h2>
            <p className="">
              I had a great career with the DOD, but I knew I wanted more. I decided to go back to school and take advantage of my earned GI Bill. I started attending classes full-time, while still working full-time for a few semesters. I then decided to give school 100% of my attention so I quit my day job with the DOD and worked part time as a Bike Shop employee, Teachers assistant, and as an intern for a couple web design agencies. In the end I earned a degree in Media Design and was the Valedictorian of my class with a 4.0.
            </p>
          </section>

          <section className="art__stagger-in art__stagger-out">
            <h2 className="">Industry</h2>
            <p className="">
              I've worked with some of the best companies in the world and I really appreciate the opportunity I've had to see the industry from many different perspectives. Check out my <Link to="/resume">resume</Link> to see my where I've been.
            </p>
          </section>

        </article>
      </>
    );
  }
}

export default About;
