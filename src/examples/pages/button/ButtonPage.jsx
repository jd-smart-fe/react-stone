import React, { Component } from 'react';
import ButtonDev from '../../components-examples/ButtonDev';
import ButtonMd from '../../../components/Button/readme.md';
const ReactMarkdown = require('react-markdown');

class ButtonPage extends Component {
  render() {
    return (
      <div className="markdown">
        <ButtonDev></ButtonDev>
        <ReactMarkdown source={ButtonMd} />
      </div>
    );
  }
}

export default ButtonPage;
