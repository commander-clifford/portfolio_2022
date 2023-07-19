import React from 'react';
import PropTypes from 'prop-types';
import './band.scss';

const makeClassy = title => (
  title
    .toLowerCase()
    .replace(/\W+/g, ' ')
    .trim()
    .replace(/\s+/g, '-')
);

const Band = ({ children, data }) => {
  const { classNames, title } = data;

  const formattedTitle = title ? makeClassy(title) : '';

  const classes = ['band'];
  if (classNames) classes.push(classNames.toLowerCase());
  if (formattedTitle) classes.push(formattedTitle);

  return (
    <div className={classes.join(' ')}> 
      {children}
    </div>
  );
};

Band.propTypes = {
  children: PropTypes.node.isRequired,
  data: PropTypes.shape({
    classNames: PropTypes.string,
    title: PropTypes.string,
  }),
};

export default Band;
