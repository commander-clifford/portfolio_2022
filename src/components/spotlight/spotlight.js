import React, { useEffect } from 'react';
import './spotlight.scss';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { addNonBreakingSpace } from '../../services/addNonBreakingSpaces.js';

const Spotlight = ({ data = {} }) => {

  console.log("Spotlight", data);

  const { content = '', image = '' } = data;

  useEffect(() => {

    addNonBreakingSpace();
    
  }, []);

  return (
    <section className="spotlight">
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
