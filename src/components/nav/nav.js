import { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { gsap } from 'gsap';
import './nav.scss';

const MOBILE_BREAKPOINT = 768;

const Nav = ({ currentPath = '/' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const isOpenRef = useRef(false);
  const hamburgerRef = useRef(null);

  useEffect(() => {
    const nav = document.querySelector('#nav');
    const hamburger = document.querySelector('#hamburger');
    const hamburgerWrapper = document.querySelector('#wrapper');
    const hamburgerBars = Array.from(document.getElementsByClassName('bars'));
    const navItemsWrapper = document.querySelector('#navItems');
    const navItemElements = Array.from(document.getElementsByClassName('nav-item'));
    const originalBodyOverflow = document.body.style.overflow;

    const animationTimeline = gsap.timeline({
      paused: true,
      defaults: { duration: 0.5, ease: 'power1.out' },
    })
      .to(nav, {}, '<')
      .to(navItemsWrapper, { maxWidth: '100vw' }, '<')
      .to(navItemElements, { stagger: 0.05, x: 0, autoAlpha: 1 }, '<')
      .to(hamburgerWrapper, { rotateZ: -90 }, '<0.1')
      .to([hamburgerBars[0], hamburgerBars[3]], { rotateZ: -90, scale: 0, autoAlpha: 0 }, '<')
      .to(hamburgerBars[0], { y: '1rem' }, '<')
      .to(hamburgerBars[3], { y: '-1rem' }, '<')
      .to(hamburgerBars[1], { rotate: -45 }, '<')
      .to(hamburgerBars[2], { rotate: -135 }, '<');

    const openNav = () => {
      animationTimeline.play();
      nav.classList.add('active');
      if (window.innerWidth <= MOBILE_BREAKPOINT) document.body.style.overflow = 'hidden';
      isOpenRef.current = true;
      setIsOpen(true);
      if (window.innerWidth <= MOBILE_BREAKPOINT) {
        window.requestAnimationFrame(() => navItemsWrapper.querySelector('.nav-item')?.focus());
      }
    };

    const closeNav = () => {
      animationTimeline.reverse();
      nav.classList.remove('active');
      document.body.style.overflow = originalBodyOverflow;
      isOpenRef.current = false;
      setIsOpen(false);
    };

    const syncViewport = () => {
      const mobile = window.innerWidth <= MOBILE_BREAKPOINT;
      setIsMobile(mobile);
      if (mobile) closeNav();
      else openNav();
    };

    const toggleNav = () => (isOpenRef.current ? closeNav() : openNav());
    const clickToClose = () => {
      if (window.innerWidth <= MOBILE_BREAKPOINT) closeNav();
    };

    const onKeyDown = (event) => {
      if (window.innerWidth > MOBILE_BREAKPOINT || !isOpenRef.current) return;
      if (event.key === 'Escape') {
        event.preventDefault();
        closeNav();
        hamburger.focus();
        return;
      }
      if (event.key !== 'Tab') return;
      const focusable = [...navItemElements, hamburger];
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    gsap.set(navItemElements, { x: '4ch', autoAlpha: 0 });
    gsap.set(navItemsWrapper, { maxWidth: 0 });
    hamburger.addEventListener('click', toggleNav);
    navItemElements.forEach(item => item.addEventListener('click', clickToClose));
    document.addEventListener('keydown', onKeyDown);
    window.addEventListener('resize', syncViewport);
    syncViewport();

    return () => {
      hamburger.removeEventListener('click', toggleNav);
      navItemElements.forEach(item => item.removeEventListener('click', clickToClose));
      document.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('resize', syncViewport);
      document.body.style.overflow = originalBodyOverflow;
      animationTimeline.kill();
    };
  }, []);

  return (
    <nav id="nav" className="nav" aria-label="Main navigation">
      <div id="navItems" className="nav-items" aria-hidden={isMobile && !isOpen}>
        <NavLink activeClassName="nav-item--active" className="nav-item" exact to="/" tabIndex={isMobile && !isOpen ? -1 : 0}>Home</NavLink>
        <NavLink activeClassName="nav-item--active" className="nav-item" to="/about" tabIndex={isMobile && !isOpen ? -1 : 0}>About</NavLink>
        <NavLink activeClassName="nav-item--active" className="nav-item" to="/resume" tabIndex={isMobile && !isOpen ? -1 : 0}>Resume</NavLink>
        <NavLink
          activeClassName="nav-item--active"
          className="nav-item"
          to="/projects"
          isActive={(match) => Boolean(match && !currentPath.includes('/projects/')) || currentPath.startsWith('/work/')}
          tabIndex={isMobile && !isOpen ? -1 : 0}
        >Projects</NavLink>
      </div>

      <button
        id="hamburger"
        ref={hamburgerRef}
        className="hamburger"
        type="button"
        aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={isOpen}
        aria-controls="navItems"
      >
        <div id="wrapper" className="wrapper" aria-hidden="true">
          <span className="bars bar-1"></span>
          <span className="bars bar-2a"></span>
          <span className="bars bar-2b"></span>
          <span className="bars bar-3"></span>
        </div>
      </button>
    </nav>
  );
};

export default Nav;
