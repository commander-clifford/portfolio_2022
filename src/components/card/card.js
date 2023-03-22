import React from 'react';
import PropTypes from 'prop-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import './card.scss';

const Card = ({ className = '', data = {} }) => {
  const { subHeadline = '', headline = '', description = {} } = data;

  return (
    <div className={`card ${className}`}>
      {subHeadline && <h5>{subHeadline}</h5>}
      {headline && <h2>{headline}</h2>}
      {documentToReactComponents(description)}
    </div>
  );
}

Card.propTypes = {
  className: PropTypes.string,
  data: PropTypes.shape({
    subHeadline: PropTypes.string,
    headline: PropTypes.string,
    description: PropTypes.object,
  }),
};

export default Card;
