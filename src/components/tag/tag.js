import React from 'react';
import './tag.scss';

const Tag = ({ classy, children, data = {} }) => {

  const { } = data;

  const classes = `tag ${classy || ''}`.trim();
  
  return (
    <div className={classes}>
      {children}
    </div>
  );
};

export default Tag;
