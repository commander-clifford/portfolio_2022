import React, { Component } from 'react';
// import { gsap } from "gsap";
// import './design-system.scss';

class DesignSystem extends Component {

  componentDidMount(){}

  render() {
    return (
      <>
        <article className="design-system">
          
          <section>
            
            <h1 className="art__stagger-in art__stagger-out w-border">Headline 1 wBorder</h1>
            <h1 className="art__stagger-in art__stagger-out">Headline 1</h1>
            <h2 className="art__stagger-in art__stagger-out">Headline 2</h2>
            <h3 className="art__stagger-in art__stagger-out">Headline 3</h3>
            <h4 className="art__stagger-in art__stagger-out">Headline 4</h4>
            <h5 className="art__stagger-in art__stagger-out">Headline 5</h5>
            <h6 className="art__stagger-in art__stagger-out">Headline 6</h6>
            
          </section>

        </article>
      </>
    );
  }
}

export default DesignSystem;
