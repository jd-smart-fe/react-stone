import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Toast from '../../components/Toast/toast.jsx';
import Button from '../../components/Button/Button.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  openToast = () =>{
    Toast.top('普通文字--从头渐出', 2000);
  }
  openMiddle = () =>{
    Toast.middle('普通文字--中间渐出',2000)
  }
  openBottom = () =>{
    Toast.bottom('普通文字--从底渐出',2000)
  }
  openErrorTopico = () =>{
    Toast.errorTopico('带错误图标--从头渐出',2000)
  }
  openYesTopico = () =>{
    Toast.yesTopico('带正确图标--从头渐出',2000)
  }
  render() {
    return (
      <div className="code-box-demo">
        <Button onClick={this.openToast} >top</Button>
        <Button onClick={this.openMiddle} >middle</Button>
        <Button onClick={this.openBottom} >bottom</Button>
        <Button onClick={this.openErrorTopico} >errorTopico</Button>
        <Button onClick={this.openYesTopico} >yesTopico</Button>
      </div>
    );
  }
}

export default App;
