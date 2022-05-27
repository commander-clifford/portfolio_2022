import React, { Component } from 'react';
import Cover from '../../components/cover/cover';
import Card from '../../components/card/card';
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import './home.scss';

class Home extends Component {


  constructor(props) {
    super(props);
  }

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

  buildNavCards = () => {
    
    let navCards = this.props.sitePaths.slice(1).map((item, key) => 
      
        <Card path={item.path} key={key}>
          <h4 className='card__title'>{item.title}</h4>
          <span>{item.description}</span>
        </Card>
      
    );
    return navCards

  }

  render() {
    return (
      <article className="home">

        <section id="cover__wrapper" className="cover__wrapper full">
          <Cover></Cover>
        </section>

        <section className='section'>
          <blockquote>
            Part developer, part designer, all of the above. From content production and development to designing with code, I can do it all.
          </blockquote>
        </section>

        <section className='cards-wrapper container'>
          {this.buildNavCards()}
        </section>

      </article>
    );
  }
}

export default Home;
