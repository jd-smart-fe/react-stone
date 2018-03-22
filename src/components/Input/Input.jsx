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
  componentWillReceiveProps(nextProps, props) {
    if (nextProps.value !== props.value) {
      this.setState({
        value: nextProps.value,
      });
    }
  }
  isInput = (event) => {
    let { name } = this.props;
    if (typeof this.props.onInput === 'function') {
      if (name) {
        let params = {
          [name]: {
            value: event.target.value,
          },
          value: event.target.value,
        };
        this.props.onInput(params, name);
      } else {
        this.props.onInput({
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
      input: true,
      [`input-${size}`]: size,
      [`input-${radius}`]: radius,
    });
    return (
      <span className='input-wrap input-group'>
        { addonBefore ?
          <span className='input-before'>{ addonBefore }</span>
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
          <span className="input-after">{ addonAfter }</span>
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
  onInput: PropTypes.func,
  radius: PropTypes.string,
};

export default Input;
