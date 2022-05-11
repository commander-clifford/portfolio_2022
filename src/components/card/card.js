import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import './card.scss';

class Card extends Component {
  
  componentDidMount(){

  }

  render() {
    return (

      <section className='card nav-card'>
        <Link className="card__link-wrapper" to={this.props.path}>
          <div className='card__top'>
            <i className='circle'></i>
          </div>
          <div>
            {this.props.children}
          </div>
        </Link>
      </section>

    );
  }
}

export default Card;
