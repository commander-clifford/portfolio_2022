import React from 'react';
import PropTypes from 'prop-types';
import Button from '../button/button';
import Text from '../text/text';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import './poster.scss';

const Poster = ({ data = {} }) => {

  console.log("Poster DATA:", data);

  const { zHeight = '', type = '', subHeadline = '', headline = '', classNames = '' } = data;

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
        {documentToReactComponents(data.cardContent)}
      </div>
    </div>
  );
};

Poster.propTypes = {
  data: PropTypes.shape({
    height: PropTypes.string,
    type: PropTypes.string,
    subHeadline: PropTypes.string,
    headline: PropTypes.string,
    classNames: PropTypes.string,
    cardContent: PropTypes.arrayOf(PropTypes.shape({
      sys: PropTypes.shape({
        contentType: PropTypes.shape({
          sys: PropTypes.shape({
            id: PropTypes.string,
          }),
        }),
      }),
      fields: PropTypes.shape({
        copy: PropTypes.string,
      }),
    })),
  }),
};

export default Poster;
