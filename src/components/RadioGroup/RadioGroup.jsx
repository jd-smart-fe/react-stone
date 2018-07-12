import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './radio.scss';

export class Radio extends Component {
  render() {
    const { checked, value } = this.props;
    const defaultContext = {
      name: undefined,
      selectedValue: undefined,
      onChange: () => {},
    };
    const { name, selectedValue, onChange } = this.context.radioGroup || defaultContext;
    const optional = {};
    if (checked === true) {
      optional.checked = true;
    }
    if (selectedValue !== undefined) {
      optional.checked = (this.props.value === selectedValue);
    }
    if (typeof onChange === 'function') {
      if (name) {
        optional.onChange = onChange.bind(null, { [name]: this.props.value });
      } else {
        optional.onChange = onChange.bind(null, this.props);
      }
    }
    return (
      <span>
        <input
          {...this.props}
          type="radio"
          name={name}
          disabled={this.props.disabled}
          className="magic magic-radio"
          {...optional} />
        <label htmlFor={this.props.id}>{this.props.textname}</label>
      </span>
    );
  }
}

Radio.contextTypes = {
  radioGroup: PropTypes.object,
};

export class RadioGroup extends React.Component {
  getChildContext() {
    const { name, value, onChange } = this.props;
    return {
      radioGroup: {
        name, selectedValue: value, onChange,
      },
    };
  }

  render() {
    const {
      Tag, name, value, onChange, children, isValid, ...rest
    } = this.props;
    return <Tag {...rest}>{children}</Tag>;
  }
}

RadioGroup.defaultProps = {
  Tag: 'div',
};

RadioGroup.propTypes = {
  name: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
  ]),
  onChange: PropTypes.func,
  children: PropTypes.node.isRequired,
  Component: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.object,
  ]),
};

RadioGroup.childContextTypes = {
  radioGroup: PropTypes.object,
};
