import React, { useEffect, useRef } from 'react';
import { addNonBreakingSpace } from '../../services/addNonBreakingSpaces.js';
import './text.scss';

const Text = ({parentAlignment, children, data = {}}) => {

  const componentRef = useRef(null);

  useEffect(() => {

    if (componentRef.current) {
      addNonBreakingSpace(componentRef.current);
    }
    
  }, []);

  const { alignment } = data;

  const calculatedAlignment = parentAlignment ? parentAlignment : alignment;

  const alignmentClassMap = {
    "Left": "text-left",
    "Right": "text-right",
    "Center": "text-center"
  };

  const alignmentClass = alignmentClassMap[calculatedAlignment] || "text-center";

  const classes = ['text', alignmentClass].filter(Boolean).join(' ');

  return (
    <div className={classes} ref={componentRef}>
      {children}
    </div>
  );
}

export default Text;
