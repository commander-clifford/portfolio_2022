import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { gsap } from 'gsap';
import './nav.scss';

const Nav = () => {

  useEffect(() => {
    const MOBILE_BREAKPOINT = 768;
    let isOpen = window.innerWidth <= MOBILE_BREAKPOINT;
    const nav = document.querySelector('#nav');
    const hamburger = document.querySelector('#hamburger');
    const hamburgerWrapper = document.querySelector('#wrapper');
    const hamburgerBars = Array.from(document.getElementsByClassName('bars'));
    const navItemsWrapper = document.querySelector('#navItems');
    const navItemElements = Array.from(document.getElementsByClassName('nav-item'));
    
    const clickToClose = () => {
      if (window.innerWidth <= MOBILE_BREAKPOINT) { 
        closeNav();
      }
    };

    navItemElements.forEach((navItem) => {
      navItem.addEventListener('click', clickToClose);
    });

    const freezeScroll = () => { 
      if (window.innerWidth <= MOBILE_BREAKPOINT) { 
        document.body.style.overflow = 'hidden' 
      }
    }
    const releaseScroll = () => { 
      document.body.style.overflow = 'auto'
    }

    const toggleNav = () => isOpen ? closeNav() : openNav();

    const openNav = () => {
      animateTheNav('open');
      freezeScroll();
      nav.classList.add('active');
      isOpen = true;
    };

    const closeNav = () => {
      animateTheNav('close');
      releaseScroll();
      nav.classList.remove('active');
      isOpen = false;
    };

    const animateTheNav = (direction) => {
      direction === 'open' ? animationTimeline.play() : animationTimeline.reverse();
    };

    const animationTimeline = gsap.timeline({
      paused: true,
      defaults: { duration: 0.5, ease: 'power1.out' }
    })
      .to(nav, {}, '<')
      .to(navItemsWrapper, { maxWidth: '100vw' }, '<')
      .to(navItemElements, { stagger: 0.05, x: 0, autoAlpha: 1 }, '<')
      .to(hamburgerWrapper, { rotateZ: -90 }, '<0.1')
      .to(hamburgerBars, {}, '<')
      .to([hamburgerBars[0], hamburgerBars[3]], { rotateZ: -90, scale: 0, autoAlpha: 0 }, '<')
      .to(hamburgerBars[0], { y: '1rem' }, '<')
      .to(hamburgerBars[3], { y: '-1rem' }, '<')
      .to(hamburgerBars[1], { rotate: -45 }, '<')
      .to(hamburgerBars[2], { rotate: -135 }, '<');

    gsap.set(navItemElements, { x: '4ch', autoAlpha: 0 });
    gsap.set(navItemsWrapper, { maxWidth: 0 });

    hamburger.addEventListener('click', toggleNav);

    const handleResize = () => {
      if (window.innerWidth <= MOBILE_BREAKPOINT) {
        closeNav();
      } else {
        openNav();
      }
    };

    const handleLoad = () => {
      setTimeout(() => {
        if (window.innerWidth <= MOBILE_BREAKPOINT) {
          closeNav();
        } else {
          openNav();
        }
      }, 800);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('load', handleLoad);

    return () => {
      hamburger.removeEventListener('click', toggleNav);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('load', handleLoad);
      animationTimeline.kill();
    };
  }, []);

  const currentPath = window.location.pathname;

  return (
    <nav id="nav" className="nav">
      <div id="navItems" className="nav-items">
        <NavLink activeClassName="nav-item--active" className="nav-item" exact to="/">Home</NavLink>
        <NavLink activeClassName="nav-item--active" className="nav-item" to="/about">About</NavLink>
        <NavLink activeClassName="nav-item--active" className="nav-item" to="/resume">Resume</NavLink>
        <NavLink activeClassName={currentPath.includes('/projects/') ? '' : "nav-item--active"} className="nav-item" to="/projects">Projects</NavLink>
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

export default Nav;
