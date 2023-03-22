import React, { useEffect } from 'react';
import { gsap } from "gsap";
import './cover.scss';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { addNonBreakingSpace } from '../../services/addNonBreakingSpaces.js';

const Cover = (props) => {

  useEffect(() => {

    addNonBreakingSpace();

    let timeline = new gsap.timeline({
      delay: 1
    });
    timeline.fromTo(
      document.getElementById("copy"),
      {
        opacity: 0
      },
      {
        duration: 0.4,
        opacity: 1
      }
    );
    
  }, []);

  return (
    <section className="cover">
      <div className="cover__container ">

        <div id="copy" className="cover__content">
          <div className="cover__copy">
            <div className=''>
              <h4>{props.data?.fields?.title}</h4>
              <h1>{props.data?.fields?.name}</h1>
              {documentToReactComponents(props.data?.fields?.description)}
            </div>
          </div>
        </div>

        <div className="cover__image">
          <img src={props.data?.fields?.heroImage?.fields?.file?.url} alt=""/>
        </div>

      </div>
    </section>
  );
};

export default Cover;
