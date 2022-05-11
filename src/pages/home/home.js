import React, { Component } from 'react';
import Cover from '../../components/cover/cover';
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import './home.scss';

class Home extends Component {

  componentDidMount(){
    let cover = document.getElementById("cover");
    let timeline = new gsap.timeline({
      delay: 2,
      paused: true
    });
    timeline.to(cover,{
      y: -200
    });
    timeline.to(cover,{
      y: 0,
      ease: "back.out(4)",
    });
  }

  render() {
    return (
      <article className="home">

        <section id="cover__wrapper" className="cover__wrapper full">
          <Cover></Cover>
        </section>

        <section className='cards-wrapper container'>

          <section className='card nav-card'>
            <Link className="card__link-wrapper" to="/about">
              About
            </Link>
          </section>
          <section className='card nav-card'>
            <Link className="card__link-wrapper" to="/resume">
              Resume
            </Link>
          </section>
          <section className='card nav-card'>
            <Link className="card__link-wrapper" to="/projects">
              Projects
            </Link>
          </section>
          
        </section>

      </article>
    );
  }
}

export default Home;
