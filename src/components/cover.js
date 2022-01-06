import React, { Component } from 'react';
import SplitTextJS from 'split-text-js';
import { gsap } from "gsap";

import './cover-styles.scss';
class Cover extends Component {

  // constructor(props) {
  //   super(props);
  // }

  componentDidMount(){
    let supLine = document.getElementById("sup");
    let splitHeadline = document.getElementById("splitHeadline");
    splitHeadline = new SplitTextJS(splitHeadline);

    let timeline = new gsap.timeline({
      delay: 1
    });

    timeline.fromTo(supLine,
    {
      autoAlpha: 0
    },
    {
      duration: 0.4,
      autoAlpha: 1
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

  }

  render() {
    return (
      <div className="cover">
        <div className="cover__container container">

          <div className="">
            <div className="cover__headline">
              <p id="sup" className="sup">Hi! I'm</p>
              <h1 id="splitHeadline" className="headline">Clifford</h1>
            </div>
          </div>

          <div className="cover__content row">



            <div className="col-md-7 d-flex align-items-end">
              <div>
                <p>
                  I write code, make things, and create delightful experiences.
                  <br/>
                  Check out my resume, see me on Codepen.io, and scroll down for more
                </p>
              </div>
            </div>

            <div className="col-md-5 d-flex align-items-end justify-content-end">
              <div>
                <p>
                  contact info
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    );
  }
}

export default Cover;
