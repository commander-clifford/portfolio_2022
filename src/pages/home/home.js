import React, { Component } from 'react';
import Cover from '../../components/cover/cover';
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

        <p>-Coming Soon-</p>

        <footer>
          <a href="https://www.linkedin.com/in/clifford-nelson-bba47459/" target="_blank">LinkedIn</a>
        </footer>

      </article>
    );
  }
}

export default Home;
