import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './radio.scss';

export class Radio extends Component {
  render() {
    const { defaultChecked, checked, value } = this.props;
    const defaultContext = {
      name: undefined,
      selectedValue: undefined,
      onChange: () => {},
    };
    const { name, selectedValue, onChange } = this.context.radioGroup || defaultContext;
    const optional = {};
    if (defaultChecked === true || checked === true) {
      optional.checked = true;
    }
    if (selectedValue !== undefined) {
      optional.checked = (this.props.value === selectedValue);
    }
    if (typeof onChange === 'function') {
      optional.onChange = onChange.bind(null, this.props);
    }

    return (
      <span>
        <input
          {...this.props}
          type="radio"
          name={name}
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
    const { name, selectedValue, onChange } = this.props;
    return {
      radioGroup: {
        name, selectedValue, onChange,
      },
    };
  }

  render() {
    const {
      Tag, name, selectedValue, onChange, children, ...rest
    } = this.props;
    return <Tag {...rest}>{children}</Tag>;
  }
}

RadioGroup.defaultProps = {
  Tag: 'div',
};

RadioGroup.propTypes = {
  name: PropTypes.string,
  selectedValue: PropTypes.oneOfType([
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
