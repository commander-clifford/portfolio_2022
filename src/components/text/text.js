import React from 'react';
import './text.scss';

const Text = ({children, data = {}}) => {

  const { alignment } = data;

  const alignmentClassMap = {
    "Left": "text-left",
    "Right": "text-right",
    "Center": "text-center"
  };

  const alignmentClass = alignmentClassMap[alignment] || "text-center";

  const classes = ['text', alignmentClass].filter(Boolean).join(' ');

  return (
    <div className={classes}>
      {children}
    </div>
  );
}

export default Text;
