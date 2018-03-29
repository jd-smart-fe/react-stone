import React, { Component } from 'react';
import Select from '../../Select/Select';
import getControlGroup from '../getControlGroup.jsx';

class SelectWrap extends Component {
  render() {
    return <Select { ...this.props } />;
  }
}

const SelectField = getControlGroup(SelectWrap);

export default SelectField;
