import React from 'react';
import classNames from 'classnames';
import './icon.scss';

const Icon = (props) => {
  const classIcon = classNames({
    icon: true,
    [`icon-${props.type}`]: props.type,
  });
  return (
    <span className={ classIcon }></span>
  );
};

export default Icon;
