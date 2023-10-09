import React from 'react';
import { useHistory } from 'react-router-dom';
import './button.scss';

const Button = ({alignment, data = {} }) => {
  const { classNames, link, copy, style = 'default', size = 'medium' } = data;
  const history = useHistory();

  const styleClassMap = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    default: '',
  };

  const sizeClassMap = {
    large: 'btn-lg',
    medium: 'btn-md',
    small: 'btn-sm',
  };
  
  const alignmentClassMap = {
    Left: 'btn-align-start',
    Center: 'btn-align-center',
    Right: 'btn-align-end',
  };

  const alignmentClass = alignmentClassMap[alignment];
  const styleClass = styleClassMap[style];
  const sizeClass = sizeClassMap[size];

  const handleButtonClick = (event) => {
    event.preventDefault();
    history.push(link);
  };

  return (
    <button className={`btn ${styleClass} ${sizeClass} ${alignmentClass} ${classNames ? classNames : ''}`} onClick={handleButtonClick}>
      {copy}
    </button>
  );
};

export default Button;
  