import React from 'react';
import Button from '../button/button';
import Text from '../text/text';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import './poster.scss';

const Poster = ({ data = {} }) => {

  // console.log("Poster DATA:", data);

  const { zHeight = '', type = '', subHeadline = '', headline = '', classNames = '', cardContent, cta } = data;

  const heightMapping = {
    'Level 0': 'shadow-none',
    'Level 1': 'shadow-sm',
    'Level 2': 'shadow',
    'Level 3': 'shadow-lg'
  };

  const formattedHeight = heightMapping[zHeight] || 'zero';

  const classes = ['poster card', type, formattedHeight, classNames].filter(Boolean).join(' ');

  return (
    <div className={classes}>
      <div className={'poster__headline'}>
        {subHeadline && <h5>{subHeadline}</h5>}
        {headline && <h2>{headline}</h2>}
      </div>
      <div className={'poster__copy'}>
        {documentToReactComponents(cardContent)}
      </div>
      {cta ? 
        <Button className={'poster__cta'}>
          CTA Button
        </Button> 
        : null
      }
      
    </div>
  );
};

export default Poster;
