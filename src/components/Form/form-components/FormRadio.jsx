import React, { Component } from 'react';
import { Radio, RadioGroup } from '../../RadioGroup/RadioGroup';
import getControlGroup from '../getControlGroup.jsx';

class RadioGroupWrap extends Component {
  render() {
    const { type = 'radio', ...rest } = this.props;
    return <RadioGroup {...this.props}/>;
  }
}

const RadioField = getControlGroup(RadioGroupWrap);

export default RadioField;
