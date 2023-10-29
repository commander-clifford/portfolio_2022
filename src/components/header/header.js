import React, { useEffect } from 'react';
import { gsap } from "gsap";
import SplitTextJS from 'split-text-js';
import './header.scss';
import Nav from "../nav/nav";
import { Link } from "react-router-dom";

function Header(props) {

  const currentPath = props.path;

  useEffect(() => {
    let splitHeadline = document.getElementById("splitHeadline");
    splitHeadline = new SplitTextJS(splitHeadline);

    let timeline = gsap.timeline({
      delay: 1
    });
    timeline.fromTo(splitHeadline.chars,
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
  }, []);

  return (
    <>
    <header className="header">

      <div className='header__container container'>

        <div className="">
          <Link className="" to="/">
            <h1 className='animation-wrapper'>
              <span id="splitHeadline" className="">Clifford</span>
            </h1>
          </Link>
        </div>

        <div className="header-nav">
          <Nav currentPath={currentPath}/>
        </div>

      </div>

    </header>

  </>
  );
}

export default Header;
