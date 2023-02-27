import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import { gsap } from "gsap";
import './nav.scss';

class Nav extends Component {
  
  componentDidMount(){
    let isOpen = window.innerWidth <= 768 ? false : true;
    let nav = document.querySelector("#nav");
    let hamburger = document.querySelector("#hamburger");
    let hamburgerWrapper = document.querySelector("#wrapper");
    let hamburgerBarsList = document.getElementsByClassName("bars");
    let hamburgerBars = Array.from(hamburgerBarsList);
    let navItemsWrapper = document.querySelector("#navItems");
    let navItemsList = document.getElementsByClassName("nav-item");
    let navItemElements = Array.from(navItemsList);
    
    hamburger.addEventListener("click", () => ( toggleNav() ));
    // navItemElements.forEach(item => item.addEventListener("click", () => ( closeNav() )));

    window.addEventListener("resize", function() {
      if (window.innerWidth <= 576) {
        closeNav();
      } else {
        openNav();
      }
    });
    window.addEventListener("load", function() {
      this.setTimeout(() => {
        if (window.innerWidth <= 576) {
          closeNav();
        } else {
          openNav();
        }
      }
      ,800);
    });

  
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
        duration: 0.5,
        ease: "power1.out"
      }
    })
    .to(nav,{

    },"<")
    .to(navItemsWrapper,{
      maxWidth: '100vw'
    },"<")
    .to(navItemElements,{
      stagger: 0.05,
      x: 0,
      autoAlpha: 1
    },"<")

    .to(hamburgerWrapper,{
      rotateZ: -90
    },"<0.1")
    .to(hamburgerBars,{

    },"<")
    .to([hamburgerBars[0],hamburgerBars[3]],{
      rotateZ: -90,
      scale: 0,
      autoAlpha: 0
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
    },"<");


    gsap.set(navItemElements,{
      x: "4ch",
      autoAlpha: 0
    });
    gsap.set(navItemsWrapper,{
      maxWidth: 0
    });
    
  }

  render() {
    return (
      <nav id="nav" className="nav">

        <div id="navItems" className="nav-items">
          <NavLink activeClassName="nav-item--active" className="nav-item" exact to="/">Home</NavLink>
          <NavLink activeClassName="nav-item--active" className="nav-item" to="/about">About</NavLink>
          <NavLink activeClassName="nav-item--active" className="nav-item" to="/resume">Resume</NavLink>
          <NavLink activeClassName="nav-item--active" className="nav-item" to="/projects">Projects</NavLink>
        </div>

        <button id="hamburger" className="hamburger">
          <div id="wrapper" className="wrapper">
            <span className="bars bar-1"></span>
            <span className="bars bar-2a"></span>
            <span className="bars bar-2b"></span>
            <span className="bars bar-3"></span>
          </div>
        </button>

      </nav>
    );
  }
}

export default Nav;
