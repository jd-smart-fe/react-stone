import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './button.scss';

const Button = (props) => {
  let {
    theme, radius, icon, disabled, className, onClick, size, htmlType,
  } = props;
  let classArr = classNames({
    'rs-btn-base': true,
    [` rs-btn-base-${theme}`]: theme,
    [` rs-btn-size-${size}`]: size,
    'rs-btn-radius': false,
    [` rs-btn-radius-${radius}`]: radius,
    icon: false,
    [` icon-${icon}`]: icon,
    'rs-btn-disabled': disabled,
  });
  return (
    <button
      type={htmlType}
      className={ classArr }
      disabled={ disabled }
      onClick={ onClick }>
      { props.children }
    </button>
  );
};

Button.defaultProps = {
  size: 'base',
  radius: 'small',
  disabled: false,
  htmlType: 'button',
  theme: 'blue',
};

Button.propTypes = {
  size: PropTypes.oneOf(['base', 'small', 'large']),
  radius: PropTypes.string,
  disabled: PropTypes.bool,
  icon: PropTypes.string,
  htmlType: PropTypes.string,
  theme: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
