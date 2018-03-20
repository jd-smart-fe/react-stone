import PropTypes from 'prop-types';
import React from 'react';
import './checkbox.css';

export class Checkbox extends React.Component {
  render() {
    let name, selectedValue, onChange;
    if (this.context.checkboxGroup) {
      name = this.context.checkboxGroup.name;
      selectedValue = this.context.checkboxGroup.selectedValue;
      onChange = this.context.checkboxGroup.onChange;
    } else {
      onChange = this.props.onChange
    };
    const optional = {};
    if(selectedValue !== undefined) {
      optional.checked = (selectedValue.indexOf(String(this.props.value)) !== -1);
    }
    if(typeof onChange === 'function') {
      optional.onChange = onChange.bind(null, this.props.value);
    }

    return (
      <span>
        <input
          {...this.props}
          type="checkbox"
          name={name}
          className="magic magic-checkbox"
          {...optional} />
        <label htmlFor={this.props.id}>{this.props.textname}</label>
      </span>
    );
  }
};

Checkbox.contextTypes = {
  checkboxGroup: PropTypes.object
};

export class CheckboxGroup extends React.Component {
  getChildContext() {
    const {name, selectedValue, onChange} = this.props;
    return {
      checkboxGroup: {
        name, selectedValue, onChange
      }
    }
  }

  render() {
    const {Component, name, selectedValue, onChange, children, ...rest} = this.props;
    return <Component {...rest}>{children}</Component>;
  }
};

CheckboxGroup.defaultProps = {
  Component: "div"
};

CheckboxGroup.propTypes = {
  name: PropTypes.string,
  onChange: PropTypes.func,
  children: PropTypes.node.isRequired,
  Component: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.object,
  ])
};

CheckboxGroup.childContextTypes = {
  checkboxGroup: PropTypes.object
};