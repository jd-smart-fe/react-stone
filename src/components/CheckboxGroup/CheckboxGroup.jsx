import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './checkbox.css';

class CheckboxGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.defaultValue,
    };
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.value && (nextProps.value !== this.state.value)) {
      this.setState({
        value: nextProps.value,
      });
    }
  }
  onChange = (e) => {
    const arr = this.state.value;
    const index = this.state.value.indexOf(e.target.id);
    if (index === -1) {
      arr.push(e.target.id);
    } else {
      arr.splice(index, 1);
    }
    this.setState({
      value: arr,
    });
    let params;
    if (this.props.name) {
      params = {
        [this.props.name]: arr,
      };
    } else {
      params = arr;
    }
    if (typeof this.props.onChange === 'function') {
      this.props.onChange(params, e.target.id);
    }
  }
  render() {
    const { options, onChange } = this.props;
    const checkboxArr = options.map((option, index) => {
      return (<span key={index}>
        <input
          type="checkbox"
          disabled={option.disabled}
          className="magic magic-checkbox"
          id={option.value}
          onChange={this.onChange}
          checked={this.state.value.indexOf(option.value) !== -1} />
        <label htmlFor={option.value}>{option.label}</label>
      </span>);
    });
    return (<div>{checkboxArr}</div>);
  }
}

CheckboxGroup.defaultProps = {
  defaultValue: [],
};

CheckboxGroup.propTypes = {
  options: PropTypes.array,
  defaultValue: PropTypes.array,
  value: PropTypes.array,
  onChange: PropTypes.func,
};

export default CheckboxGroup;
