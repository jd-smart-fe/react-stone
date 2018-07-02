const desc = `
  # Toast 吐司

  全局展示操作反馈信息。

  ## 何时使用

  可提供成功、警告和错误等反馈信息。

  三种显示方式：顶部，居中，底部显示

  Toast自动消失，是一种不打断用户操作的轻量级提示方式。
`;

const base = `
  \`\`\`jsx
  import React, { Component } from 'react';
  import ReactDOM from 'react-dom';
  import { Toast } from 'react-stone';

  class App extends Component {
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
    render(){
      return (
        <div>
          <Button onClick={this.openToast} >top</Button>
          <Button onClick={this.openMiddle} >middle</Button>
          <Button onClick={this.openBottom} >bottom</Button>
          <Button onClick={this.openErrorTopico} >errorTopico</Button>
          <Button onClick={this.openYesTopico} >yesTopico</Button>
        </div>
      )
    }
  }

  ReactDOM.render(<App />, document.getElementById('root'));
  \`\`\`
`;

const api = `
  ## 方法

  - Toast.top('说明文字--从头渐入', 停留时间);
  - Toast.middle('说明文字--中间渐入', 停留时间);
  - Toast.bottom('说明文字--从底渐入', 停留时间);
  - Toast.errorTopico('带错误图标--从头渐入', 停留时间);
  - Toast.yesTopico('带正确图标--从头渐入', 停留时间);
`;

export {
  desc,
  base,
  api,
};
