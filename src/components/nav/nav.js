import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import './nav.scss';

class Nav extends Component {

  // constructor(props) {
  //   super(props);
  // }
  
  componentDidMount(){
    let nav = document.querySelector("#nav");

    let hamburger = document.querySelector("#hamburger");
    let hamburgerWrapper = document.querySelector("#wrapper");
    
    let hamburgerBarsList = document.getElementsByClassName("bars");
    let hamburgerBars = Array.from(hamburgerBarsList);
    hamburger.addEventListener("click", () => ( toggleNav() ));

    let navItemsWrapper = document.querySelector("#navItems");
    let navItemsList = document.getElementsByClassName("nav-item");
    let navItems = Array.from(navItemsList);
    navItems.forEach(item => item.addEventListener("click", () => ( closeNav() )));
  
  let toggleNav = () => {
    if (nav.classList.contains("active")){
      closeNav();
    } else {
      openNav();
    }
  }

  let openNav = () => {
    animateTheNav("open");
    nav.classList.add("active");
  }
  let closeNav = () => {
    animateTheNav("close");
    nav.classList.remove("active");
  }

  gsap.set(navItems,{
    // x: navItemsWrapper.offsetWidth,
    x: "4ch",
    autoAlpha: 0
  });

  // let navItemsTimeline = gsap.timeline({
  //   paused: true,
  //   defaults: {
  //     duration: 0.3,
  //     ease: "circ.in"
  //   }
  // })
  // .to(navItems,{
  //   stagger: 0.1,
  //   x: 0,
  //   autoAlpha: 1
  // });

  let hamburgerTimeline = gsap.timeline({
    paused: true,
    defaults: {
      duration: 0.3,
      ease: "power1.inOut"
    }
  })
 
  .to(hamburgerWrapper, {
    rotateZ: -90
  },"<")
  .to([hamburgerBars[0],hamburgerBars[3]], {
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
  },"<")
  ;

  let animateTheNav = (direction) => {
    if(direction === "open"){
      hamburgerTimeline.play();
      // navItemsTimeline.play();
    } else {
      hamburgerTimeline.reverse();  
      // navItemsTimeline.reverse();  
    }
  }
}

 

  

  render() {
    return (
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
    );
  }
}

export default Nav;
