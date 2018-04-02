import React, { Component } from 'react';
import classnames from 'classnames';

import { isFunctional } from '../../lib/utils.js';
import './style/field.scss';

export default Control => {
  return class ControlGroup extends Component {
    getControlInstance = () => {
      return this.control;
    };

    render() {
      const {
        required = false,
        label = '',
        className = '',
        displayError,
        ...props
      } = this.props;

      const showError =
        displayError === undefined
        ? props.error !== null
        : displayError;
      const groupClassName = classnames({
        'rs-form__control-group': true,
        'rs-form__control-group--active': props.isActive,
        'has-error': showError,
        [className]: true,
      });
      return (
        <div className={groupClassName}>
          <label className="rs-form__control-label">
            {required ? <em>* </em> : null}
            {label}
          </label>
          <div className="rs-form__controls">
            <Control {...props} ref={ (instance) => { this.control = instance; } }/>
            {showError && (
              <div style={{
                color: 'red'
              }}>{props.error}</div>
            )}
          </div>
        </div>
      );
    }
  };
};
