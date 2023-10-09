import React from 'react';
import PropTypes from 'prop-types';
import Button from '../button/button';
import Text from '../text/text';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import './card.scss';

const Card = ({ data = {} }) => {
  const { alignment = '', height = '', type = '', subHeadline = '', headline = '', additionalClassNames = '' } = data;

  console.log('CARD alignment',alignment);

  const heightMapping = {
    'Flat': 'shadow-none',
    'Level 1': 'shadow-sm',
    'Level 2': 'shadow',
    'Level 3': 'shadow-lg'
  };

  const alignmentClassMap = {
    "Left": "text-left",
    "Right": "text-right",
    "Center": "text-center"
  };
  
  const alignmentClass = alignmentClassMap[alignment] || "text-left";

  const formattedHeight = heightMapping[height] || '';

  const renderCardContent = (item, i) => {
    const componentType = item?.sys?.contentType?.sys?.id;

    if (componentType === 'text') {
      return (
        <Text key={i} parentAlignment={alignment} data={item?.fields}>
          {documentToReactComponents(item.fields.copy)}
        </Text>
      );
    } else if (componentType === 'button') {
      return (
        <Button classNames={alignment} key={i} data={item?.fields} alignment={alignment} />
      );
    } else {
      console.error(`Error: unsupported componentType ${componentType}`);
      return null;
    }
  };

  const classes = ['card', type, formattedHeight, additionalClassNames, alignmentClass].filter(Boolean).join(' ');

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

export default Card;
