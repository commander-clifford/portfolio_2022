import React, { useEffect } from 'react';
import { gsap } from "gsap";
import './cover.scss';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const Cover = (props) => {

  useEffect(() => {

      // get all p elements in the DOM
      const paragraphs = document.getElementsByTagName('p');

      // iterate over each p element
      for (let i = 0; i < paragraphs.length; i++) {
        // get the text content of the paragraph
        const text = paragraphs[i].textContent.trim();

        // split the text into an array of words
        const words = text.split(' ');

        // check that the paragraph has at least two words
        if (words.length > 1) {
          // remove the last word from the array
          const lastWord = words.pop();

          // join the remaining words back together into a string
          const remainingText = words.join(' ');

          // add the non-breaking space and the last word back into the string
          const newText = `${remainingText}&nbsp;${lastWord}`;

          // set the new text content of the paragraph
          paragraphs[i].innerHTML = newText;
        }
      }


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
