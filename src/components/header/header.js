import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import './header.scss';
import { headerTitles } from './../../data';

class Header extends Component {

  constructor(props) {
    super(props);
    this.allPaths = [];
    headerTitles.forEach(title => this.allPaths.push(title.path));
    this.phrases = [];
    headerTitles.forEach(title => this.phrases.push(title.phrase));
    let currentPath = this.props.path;
    this.state = {
      thePhrase: this.phrases[this.allPaths.indexOf(currentPath)]
    };
  }

  updateHeader = () => {
    let currentPath = this.props.path;
    this.setState({ 
      thePhrase: this.phrases[this.allPaths.indexOf(currentPath)]
    });
    // console.log("currentPath",currentPath);
    // console.log("allPaths",allPaths);
    // if(allPaths.indexOf(currentPath) !== -1) { console.log('match',currentPath) } else { console.log("no match") }
    // console.log("use phrase number ",allPaths.indexOf(currentPath));
    // console.log("phrases",phrases);
    // console.log("use phrase",this.state.thePhrase);
  }

  componentDidUpdate(previousProps, previousState) {
    if (previousProps !== this.props) {
      this.updateHeader();
    }
  }

  componentDidMount(){
    
    let isOpen = false;
    let nav = document.querySelector("#nav");
    let hamburger = document.querySelector("#hamburger");
    let hamburgerWrapper = document.querySelector("#wrapper");
    let hamburgerBarsList = document.getElementsByClassName("bars");
    let hamburgerBars = Array.from(hamburgerBarsList);
    let navItemsList = document.getElementsByClassName("nav-item");
    let navItems = Array.from(navItemsList);
    
    hamburger.addEventListener("click", () => ( toggleNav() ));
    navItems.forEach(item => item.addEventListener("click", () => ( closeNav() )));
  
    let toggleNav = () => {
      if (isOpen){
        closeNav();
      } else {
        openNav();
      }
    }

    let openNav = () => {
      animateTheNav("open");
      nav.classList.add("active");
      isOpen = true;
    }

    let closeNav = () => {
      animateTheNav("close");
      nav.classList.remove("active");
      isOpen = false;
    }

    let animateTheNav = (direction) => {
      if(direction === "open"){
        animationTimeline.play();
      } else {
        animationTimeline.reverse();  
      }
    }

    let animationTimeline = gsap.timeline({
      paused: true,
      defaults: {
        duration: 0.3,
        ease: "power1.inOut"
      }
    })
    .to(hamburgerWrapper,{
      rotateZ: -90
    },"<")
    .to([hamburgerBars[0],hamburgerBars[3]],{
      rotateZ: -90,
      scale: 0,
    },"<")
    .to(hamburgerBars[0],{
      y: '1rem',
    },"<")
    .to(hamburgerBars[3],{
      y: '-1rem',
    },"<")
    .to(hamburgerBars[1],{
      rotate: -45
    },"<")
    .to(hamburgerBars[2],{
      rotate: -135
    },"<")
    .to(navItems,{
      stagger: 0.05,
      x: 0,
      autoAlpha: 1
    },"<");

    gsap.set(navItems,{
      x: "4ch",
      autoAlpha: 0
    });

  }

  render() {
    return (
      <header className="header">
        <div className="header__container container">

          <h1>
            <span className="small">{this.state.thePhrase}</span>
            <span className="art__stagger-in">Clifford Nelson</span>
          </h1>

          <nav id="nav" className="nav">

            <div id="navItems" className="nav-items">
              <Link className="nav-item" to="/home">Home</Link>
              <Link className="nav-item" to="/about">About</Link>
              <Link className="nav-item" to="/resume">Resume</Link>
              <Link className="nav-item" to="/projects">Projects</Link>
            </div>

            <div id="hamburger" className="hamburger">
              <div id="wrapper" className="wrapper">
                <span className="bars bar-1"></span>
                <span className="bars bar-2a"></span>
                <span className="bars bar-2b"></span>
                <span className="bars bar-3"></span>
              </div>
            </div>

          </nav>

        </div>
      </header>
    );
  }
}

export default Header;
