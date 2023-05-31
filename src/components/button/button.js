import React from 'react';
import { useHistory } from 'react-router-dom';
import './button.scss';

const Button = ({ data = {} }) => {
  
  const { classNames, link, copy } = data;
  const history = useHistory();
  const handleButtonClick = (event) => {
    event.preventDefault();
    history.push(link);
  };

  return (
    <button className={'btn ' + classNames} onClick={handleButtonClick}>
      {copy}
    </button>
  );
};

export default Button;
