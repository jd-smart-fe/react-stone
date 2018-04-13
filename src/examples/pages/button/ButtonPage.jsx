import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import Button from '../../../components/Button/Button';
import Icon from '../../../components/Icon/Icon';
import * as code from './docs.js';
import DemoWrap from '../../components/DemoWrap/DemoWrap';

class ButtonPage extends Component {
  render() {
    return (
      <div className="markdown">
        <ReactMarkdown source={code.desc} />
        <h2>代码示例</h2>
        <DemoWrap desc="基础用法，最基础的按钮" code={code.base}>
          <Button>Button</Button>
        </DemoWrap>
        <DemoWrap desc="大小，通过设置 size 为'large'，'small' 分别把按钮设为大、小尺寸, 若不设置 size，则尺寸为中。" code={code.size}>
          <Button size='small'>Button small</Button>
          <Button>Button base</Button>
          <Button size='large'>Button large</Button>
        </DemoWrap>
        <DemoWrap desc="主题，设置theme控制按钮的颜色，目前有'blue','gray'可选" code={code.theme}>
          <Button theme='blue'>Button theme blue</Button>
          <Button theme='gray'>Button theme gray</Button>
        </DemoWrap>
        <DemoWrap desc="不可点击，添加 disabled 属性即可让按钮处于不可用状态" code={code.disabled}>
          <Button disabled={true}>Button Disabled</Button>
        </DemoWrap>
        <DemoWrap desc="圆角，设置radius为不同的值，显示不同程度的圆角，可选值'small','half','circle'" code={code.radius}>
          <Button radius='small'>Button radius small</Button>
          <Button radius='half'>Button radius half</Button>
          <Button radius='circle' icon="delete" />
        </DemoWrap>
        <DemoWrap desc="按钮图标，通过设置icon属性，添加不同的icon。" code={code.icon}>
          <Button icon="delete">delect</Button>
          <Button icon="upload">upload</Button>
          <Button icon="girl">girl</Button>
          <Button icon="open">open</Button>
          <Button icon="products">products</Button>
          <Button icon="data">data</Button>
          <Button icon="success">success</Button>
          <Button icon="wait">wait</Button>
        </DemoWrap>
        <DemoWrap desc="HTMLType，有时候需要设置按钮原生的type属性，那么htmlType可以帮到你" code={code.type}>
          <Button htmlType='submit'>Button Submit</Button>
        </DemoWrap>
        <ReactMarkdown source={code.api} />
      </div>
    );
  }
}

export default ButtonPage;
