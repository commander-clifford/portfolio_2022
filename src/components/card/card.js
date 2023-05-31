import React from 'react';
import PropTypes from 'prop-types';
import Button from '../button/button';
import Text from '../text/text';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import './card.scss';

const Card = ({ data = {} }) => {
  const { height = '', type = '', subHeadline = '', headline = '', additionalClassNames = '' } = data;

  const heightMapping = {
    'Flat': 'shadow-none',
    'Level 1': 'shadow-sm',
    'Level 2': 'shadow',
    'Level 3': 'shadow-lg'
  };

  const formattedHeight = heightMapping[height] || '';

  const renderCardContent = (item, i) => {
    const componentType = item?.sys?.contentType?.sys?.id;

    if (componentType === 'text') {
      return (
        <Text key={i}>
          {documentToReactComponents(item.fields.copy)}
        </Text>
      );
    } else if (componentType === 'button') {
      return <Button key={i} data={item?.fields} />;
    } else {
      console.error(`Error: unsupported componentType ${componentType}`);
      return null;
    }
  };

  const classes = ['card', type, formattedHeight, additionalClassNames].filter(Boolean).join(' ');

  return (
    <div className={classes}>
      <div className={'card__headline'}>
        {subHeadline && <h5>{subHeadline}</h5>}
        {headline && <h2>{headline}</h2>}
      </div>
      <div className={'card__copy'}>
        {data.cardContent && data.cardContent.map(renderCardContent)}
      </div>
    </div>
  );
};

Card.propTypes = {
  data: PropTypes.shape({
    height: PropTypes.string,
    type: PropTypes.string,
    subHeadline: PropTypes.string,
    headline: PropTypes.string,
    additionalClassNames: PropTypes.string,
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

export default Card;
