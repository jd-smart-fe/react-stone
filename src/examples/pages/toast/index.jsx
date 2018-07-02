import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import Button from '../../../components/Button/Button';
import Toast from '../../../components/Toast/toast';
import Icon from '../../../components/Icon/Icon';
import * as code from './docs.js';
import DemoWrap from '../../components/DemoWrap/DemoWrap';

class Docs extends Component {
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
      <div className="markdown">
        <ReactMarkdown source={code.desc} />
        <h2>代码示例</h2>
        <DemoWrap desc="基础用法" code={code.base}>
          <div>
            <Button onClick={this.openToast} >top</Button>
            <Button onClick={this.openMiddle} >middle</Button>
            <Button onClick={this.openBottom} >bottom</Button>
            <Button onClick={this.openErrorTopico} >errorTopico</Button>
            <Button onClick={this.openYesTopico} >yesTopico</Button>
          </div>
        </DemoWrap>
        <ReactMarkdown source={code.api} />
      </div>
    );
  }
}

export default Docs;
