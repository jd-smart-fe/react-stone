import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './input.scss';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      valid: true,
      errorMessage: '',
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.props.value) {
      this.setState({
        value: nextProps.value,
      });
    }
  }
  isInput = (event) => {
    let { name } = this.props;
    if (typeof this.props.onChange === 'function') {
      if (name) {
        let params = {
          [name]: event.target.value,
        };
        this.props.onChange(params, name);
      } else {
        this.props.onChange({
          value: event.target.value,
        });
      }
    }
  }
  render() {
    const {
      name, radius, value, placeholder, type, maxLength, size, addonBefore, addonAfter, disabled,
    } = this.props;

    const { valid, errorMessage } = this.state;
    const classInput = classNames({
      'rs-input': true,
      [`rs-input-${size}`]: size,
      [`rs-input-${radius}`]: radius,
    });
    return (
      <span className='rs-input-wrap rs-input-group'>
        { addonBefore ?
          <span className='rs-input-before'>{ addonBefore }</span>
          : null
        }
        <input
          type={ type }
          readOnly={ disabled ? 'readonly' : false }
          maxLength={ maxLength }
          name={ name }
          className={ classInput }
          value={ value }
          onChange={ this.isInput }
          placeholder={ placeholder } />
        {valid ? '' : (<div className="error-public"><i className="icon-error"></i><span>{errorMessage}</span></div>)}
        { addonAfter ?
          <span className="rs-input-after">{ addonAfter }</span>
          : null
        }
      </span>
    );
  }
}

Input.defaultProps = {
  size: 'base',
  type: 'text',
  disabled: false,
};

Input.propTypes = {
  size: PropTypes.oneOf(['base', 'small', 'large']),
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  addonBefore: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
  addonAfter: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
  disabled: PropTypes.bool,
  name: PropTypes.string,
  maxLength: PropTypes.number,
  required: PropTypes.bool,
  customMessage: PropTypes.string,
  testRule: PropTypes.string,
  onChange: PropTypes.func,
  radius: PropTypes.string,
};

export default Input;
