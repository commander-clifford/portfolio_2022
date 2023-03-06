import React, { Component } from 'react';
import Cover from '../../components/cover/cover';
import Card from '../../components/card/card';
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
      <article className="home" style={this.coverStyle}>

        <section id="cover__wrapper" className="container art__stagger-in art__stagger-out">
          <Cover socialLinks={this.props.socialLinks}></Cover>
        </section>

        {/* <section className="new-section-container container full-width">
          <section className='container'>
            new section
          </section>
        </section> */}

        <section className='container full-width new-section-container art__stagger-in art__stagger-out'>
          <div className='container'>
            {/* <Blockquote>
              As a seasoned Design Technologist, with over 10 years of experience, I offer a rare combination of design and engineering skills that enable me to quickly prototype, test and build innovative ideas.
            </Blockquote> */}

            {/* {this.buildNavCards()} */}
          </div>
        </section>



      </article>
    );
  }
}

export default Home;