import React from 'react';
import Button from '../button/button';
import Text from '../text/text';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import './card.scss';

const Card = ({ data = {} }) => {
  // Destructure properties from the incoming data prop with default values
  const { 
    alignment = '', 
    height = '', 
    type = '', 
    subHeadline = '', 
    headline = '', 
    additionalClassNames = '' 
  } = data;

  // Mapping for height types to their respective CSS classes
  const heightMapping = {
    'Flat': 'shadow-none',
    'Level 1': 'shadow-sm',
    'Level 2': 'shadow',
    'Level 3': 'shadow-lg'
  };

  // Mapping for text alignment to their respective CSS classes
  const alignmentClassMap = {
    "Left": "text-left",
    "Right": "text-right",
    "Center": "text-center"
  };

  // Get the appropriate alignment class
  const alignmentClass = alignmentClassMap[alignment] || "";

  // Get the appropriate height class
  const formattedHeight = heightMapping[height] || '';

  // Function to render the card's content based on the type of item
  const renderCardContent = (item, i) => {

    // Get the type of the content
    const componentType = item?.sys?.contentType?.sys?.id;

    // Check if the component type is 'text'
    if (componentType === 'text') {
      return (
        // Render the Text component
        <Text key={i} parentAlignment={alignment} data={item?.fields}>
          {documentToReactComponents(item.fields.copy)}
        </Text>
      );
    // Check if the component type is 'button'
    } else if (componentType === 'button') {
      return (
        // Render the Button component
        <Button classNames={alignment} key={i} data={item?.fields} alignment={alignment} />
      );
    } else {
      // Log an error for unsupported component types
      console.error(`Error: unsupported componentType ${componentType}`);
      return null;
    }
  };

  // Build the class string
  const classes = ['card', type, formattedHeight, additionalClassNames, alignmentClass].filter(Boolean).join(' ');

  return (
    // Render the Card component
    <div className={classes} tabIndex={'0'}>
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