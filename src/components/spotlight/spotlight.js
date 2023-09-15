import React, { useEffect } from 'react';
import './spotlight.scss';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { addNonBreakingSpace } from '../../services/addNonBreakingSpaces.js';

const Spotlight = ({ data = {} }) => {

  // console.log("Spotlight", data);

  const { content = '', height = '', image = '' } = data;

  const heightMapping = {
    'Level 0': 'shadow-none',
    'Level 1': 'shadow-sm',
    'Level 2': 'shadow',
    'Level 3': 'shadow-lg'
  };

  const formattedHeight = heightMapping[height] || '';

  const classes = ['spotlight card', formattedHeight].filter(Boolean).join(' ');

  useEffect(() => {

    addNonBreakingSpace();
    
  }, []);

  return (
    <section className={classes}>
      <div className="spotlight__container">

        <div className="spotlight__image">
          <img 
            src={image.fields.file?.url} 
            alt={image.fields.description}
          />
        </div>

        <div className="spotlight__content">
          {documentToReactComponents(content)}
        </div>

      </div>
    </section>
  );
};

export default Spotlight;
