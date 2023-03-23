import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import './card.scss';

const Card = ({ data = {} }) => {
  const { type = '', subHeadline = '', headline = '', description = {} } = data;

  return (
    <div className={`card ${type}`}>
      {subHeadline && <h5>{subHeadline}</h5>}
      {headline && <h2>{headline}</h2>}
      {documentToReactComponents(description)}
    </div>
  );
}

export default Card;
