import React from 'react';

const Blockquote = (props) => {
  
    return (
      <blockquote className="blockquote">
        <div className="blockquote__container">
          {props.children}
        </div>
      </blockquote>
    );
  
}

export default Blockquote;
