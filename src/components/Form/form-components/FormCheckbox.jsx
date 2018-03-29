import React, { Component } from 'react';
import CheckboxGroup from '../../CheckboxGroup/CheckboxGroup';
import getControlGroup from '../getControlGroup.jsx';

class CheckboxGroupWrap extends Component {
  render() {
    return <CheckboxGroup {...this.props} />;
  }
}

const CheckboxField = getControlGroup(CheckboxGroupWrap);

export default CheckboxField;
