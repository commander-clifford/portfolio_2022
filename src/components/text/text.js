import React from 'react';
// import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import './text.scss';

const Text = ({children}) => {

  return (
    <div className={`text`}>
      {children}
    </div>
  );
}

export default Text;
