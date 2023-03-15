import React from 'react';
import { useHistory } from 'react-router-dom';
import './button.scss';

const Button = ({ children, to, target, className }) => {

  const history = useHistory();

  const handleButtonClick = (event, path) => {
    event.preventDefault();
    if(target === "_blank" || target === "blank"){
      window.open(path, '_blank');
    } else {
      history.push(path);
    }
  };

  return (
    <button className={'btn ' + className} onClick={(event) => handleButtonClick(event, to)}>
      {children}
    </button>
  );
};

export default Button;
