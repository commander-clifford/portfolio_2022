import React, { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import './cover.scss';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Text from '../text/text';

const Cover = (props) => {

  // console.log("Cover", props.data?.fields?.heroImage?.fields);

  useEffect(() => {

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
            <div className='text'>
              <h4>{props.data?.fields?.title}</h4>
              <h1>{props.data?.fields?.name}</h1>
              {documentToReactComponents(props.data?.fields?.description)}
            </div>
          </div>
        </div>

        <div className="cover__image">
          <img 
            src={props.data?.fields?.heroImage?.fields?.file?.url} 
            alt={props.data?.fields?.heroImage?.fields?.description}
          />
        </div>

      </div>
    </section>
  );
};

export default Cover;
