import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import './button.scss';

const Button = ({ data = {} }) => {
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

  const styleClass = styleClassMap[style];
  const sizeClass = sizeClassMap[size];

  const handleButtonClick = (event) => {
    event.preventDefault();
    history.push(link);
  };

  return (
    <button className={`btn ${styleClass} ${sizeClass} ${classNames ? classNames : ''}`} onClick={handleButtonClick}>
      {copy}
    </button>
  );
};

Button.propTypes = {
  data: PropTypes.shape({
    classNames: PropTypes.string,
    link: PropTypes.string.isRequired,
    copy: PropTypes.string.isRequired,
    style: PropTypes.oneOf(['default', 'primary', 'secondary']),
    size: PropTypes.oneOf(['large', 'medium', 'small']),
  }),
};

Button.defaultProps = {
  data: {},
};

export default Button;
  