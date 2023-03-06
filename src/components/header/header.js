import React, { useState, useEffect } from 'react';
import { gsap } from "gsap";
import SplitTextJS from 'split-text-js';
import './header.scss';
import { sitePaths } from './../../data';
import Nav from "../nav/nav";
import { Link } from "react-router-dom";

function Header(props) {
  const allPaths = sitePaths.map(title => title.path);
  const phrases = sitePaths.map(title => title.phrase);
  const currentPath = props.path;
  const [thePhrase, setThePhrase] = useState(phrases[allPaths.indexOf(currentPath)]);

  useEffect(() => {
    updateHeaderPhrase();
  }, [props]);

  const updateHeaderPhrase = () => {
    setThePhrase(phrases[allPaths.indexOf(props.path)]);
  }

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
            <h1 className='aniwrapper'>
              <span id="splitHeadline" className="art__stagger-in">Clifford</span>
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
