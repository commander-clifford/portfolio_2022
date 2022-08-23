import React, { Component } from 'react';
import { gsap } from "gsap";
import SplitTextJS from 'split-text-js';
import './header.scss';
import { sitePaths } from './../../data';
import Nav from "../nav/nav";
import { Link } from "react-router-dom";


class Header extends Component {

  constructor(props) {
    super(props);
    this.allPaths = [];
    sitePaths.forEach(title => this.allPaths.push(title.path));
    this.phrases = [];
    sitePaths.forEach(title => this.phrases.push(title.phrase));
    let currentPath = this.props.path;
    this.state = {
      thePhrase: this.phrases[this.allPaths.indexOf(currentPath)]
    };
  }

  updateHeaderPhrase = () => {
    let currentPath = this.props.path;

    this.setState({
      thePhrase: this.phrases[this.allPaths.indexOf(currentPath)]
    }, () => {
      let splitSupHeadline = document.getElementById("splitSupHeadline");
      splitSupHeadline = new SplitTextJS(splitSupHeadline);
    
      let timeline = gsap.timeline({

      })
      .fromTo(splitSupHeadline.chars,
        {
          opacity: 0,
          y: -20,
          scale: 1.2,
        },
        {
          duration: 1,
          opacity: 1,
          y: 0,
          scale: 1,
          ease: "back.out(4)",
          stagger: {
            amount: 0.3,
          }
      });

    });

  }

  componentDidUpdate(previousProps, previousState) {
    if (previousProps !== this.props) {
      this.updateHeaderPhrase();
    }
  }

  componentDidMount(){
    
    let splitHeadline = document.getElementById("splitHeadline");
    splitHeadline = new SplitTextJS(splitHeadline);

    let timeline = gsap.timeline({
      delay: 1
    })
    .fromTo(splitHeadline.chars,
      {
        opacity: 0,
        y: -20,
        scale: 1.2,
      },
      {
        duration: 1,
        opacity: 1,
        y: 0,
        scale: 1,
        ease: "back.out(4)",
        stagger: {
          amount: 0.3,
        },
      });

  }

  render() {
    return (
      <>
      <header className="header">

        <div className='header__container container'>

          <div className="">
            <Link className="" to="/">
              <h1>
                <span id="splitSupHeadline" className="small">{this.state.thePhrase}</span>
                <span id="splitHeadline" className="art__stagger-in">Clifford Nelson</span>
              </h1>
            </Link>
          </div>

          <div className="header-nav">
            <Nav/>
          </div>

        </div>
        
      </header>

      <div className="mobile-nav">
        <Link className="" to="/">Home</Link>
        <Link className="" to="/about">About</Link>
        <Link className="" to="/resume">Resume</Link>
        <Link className="" to="/projects">Projects</Link>
      </div>

      
    </>
    );
  }
}

export default Header;
