import React, { Component } from 'react';
import Textarea from '../../Textarea/Textarea';
import getControlGroup from '../getControlGroup.jsx';

class TextareaWrap extends Component {
  render() {
    return <Textarea {...this.props} />;
  }
}

const TextareaField = getControlGroup(TextareaWrap);

export default TextareaField;
