import React, { Component } from 'react';
import SplitTextJS from 'split-text-js';
import { gsap } from "gsap";
import './cover.scss';
import { Link } from "react-router-dom";

class Cover extends Component {

  componentDidMount(){
    let supLine = document.getElementById("sup");
    let copyLine = document.getElementById("copy");
    let splitHeadline = document.getElementById("splitHeadline");
    splitHeadline = new SplitTextJS(splitHeadline);

    let timeline = new gsap.timeline({
      delay: 1
    });

    timeline.fromTo(supLine,
    {
      opacity: 0
    },
    {
      duration: 0.4,
      opacity: 1
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
    timeline.fromTo(copyLine,
    {
      opacity: 0
    },
    {
      duration: 0.4,
      opacity: 1
    });
  }

  render() {
    return (
      <div className="cover">
        <div className="cover__container container">

          <div id="copy" className="cover__content">

            <div className="cover__copy">
              <p>
                I create delightful experiences<br/> 
                with emerging technologies. 
              </p>
              <p>
                Check out my <Link to="/resume">resume</Link>,<br/>
                see me on <a href="https://codepen.io/commander-clifford" rel="noreferrer" target={"_blank"}>Codepen.io</a> or <a href="https://github.com/commander-clifford/" rel="noreferrer" target={"_blank"}>GitHub</a><br/>
                and scroll down for more
              </p>
            </div>

          </div>

        </div>
      </div>
    );
  }
}

export default Cover;
