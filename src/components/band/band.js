import React from 'react';
import PropTypes from 'prop-types';
import './band.scss';

const Band = ({ children, data= {} }) => {

  console.log("Band Data: ",data);

  const { classNames, title } = data;

  const formattedTitle = title.toLowerCase().replace(/\s+/g, '-');

  const classes = ['band'];
  if (classNames) classes.push(classNames);
  if (formattedTitle) classes.push(formattedTitle);

  return (
    <div className={classes.join(' ')}> 
      {children}
    </div>
  );
};

Band.propTypes = {
  children: PropTypes.node,
  data: PropTypes.shape({
    classNames: PropTypes.string,
    title: PropTypes.string,
  }),
};

export default Band;
 