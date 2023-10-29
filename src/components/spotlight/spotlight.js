import React from 'react';
import './spotlight.scss';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Button from '../button/button';
import Text from '../text/text';

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

  const classes = ['spotlight', formattedHeight].filter(Boolean).join(' ');

  const options = {
    renderNode: {
      'embedded-asset-block': (node) => {
        return <img src={node.data.target.fields.file.url} alt={node.data.target.fields.description} />;
      },
      'embedded-entry-block': (node) => {
        const { id } = node.data.target.sys.contentType.sys;
        if (id === 'button') {
          return (
            <Button data={node.data.target.fields} />
          );
        } else {
          return (
            <div>
              <h2>Unrecognized id: {id || 'N/A'}</h2>
            </div>
          );
        }
      }
    }
  };
  

  return (
    <section className={classes}>
      <div className="spotlight__container">

        <div className="spotlight__image">
          <img 
            src={image.fields.file?.url} 
            alt={image.fields.description}
          />
        </div>

        <div className="spotlight__content text">
          {documentToReactComponents(content, options)}
        </div>

      </div>
    </section>
  );
};

export default Spotlight;
