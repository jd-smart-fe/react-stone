import React, { Component } from 'react';
import Input from '../../Input/Input.jsx';
import getControlGroup from '../getControlGroup.jsx';

class InputWrap extends Component {
  render() {
    return <Input {...this.props} />;
  }
}

const InputField = getControlGroup(InputWrap);

export default InputField;
