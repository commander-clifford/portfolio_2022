import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import './poster.scss';

const Poster = ({ data = {} }) => {

  const {
    zHeight = '',
    type = '',
    subHeadline = '',
    headline = '',
    classNames = '',
    posterContent,
  } = data;

  const heightMapping = {
    'Level 1': 'shadow-sm',
    'Level 2': 'shadow',
    'Level 3': 'shadow-lg'
  };

  const formattedHeight = heightMapping[zHeight] || '';

  const classes = ['poster', type, formattedHeight, classNames].filter(Boolean).join(' ');

  return (
    <div className={classes} tabIndex={0}>
      <div className="poster__headline">
        {subHeadline && <h5>{subHeadline}</h5>}
        {headline && <h2>{headline}</h2>}
      </div>
      <div className="poster__copy">
        {posterContent && documentToReactComponents(posterContent)}
      </div>
    </div>
  );
};

export default Poster;
