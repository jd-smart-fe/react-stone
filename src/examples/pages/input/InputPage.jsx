import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import Input from '../../../components/Input/Input';
import Icon from '../../../components/Icon/Icon';
import * as demo from './docs';
import DemoWrap from '../../components/DemoWrap/DemoWrap';
import './page.scss';

class ButtonPage extends Component {
  render() {
    return (
      <div className="markdown">
        <ReactMarkdown source={demo.desc} />
        <h2>代码示例</h2>
        <DemoWrap desc="基础用法，最基础的输入框" code={demo.base}>
          <div className='demo-input-wrap'>
            <Input />
          </div>
          <div className='demo-input-wrap'>
            <Input placeholder="placeholder" />
          </div>
        </DemoWrap>
        <DemoWrap desc="大小，定义输入框的大小" code={demo.size}>
          <div className='demo-input-wrap'>
            <Input size="small" placeholder="small size"/>
          </div>
          <div className='demo-input-wrap'>
            <Input size="base" placeholder="base size"/>
          </div>
          <div className='demo-input-wrap'>
            <Input size="large" placeholder="large size"/>
          </div>
        </DemoWrap>
        <DemoWrap desc="disabled，可以设置是否禁用该输入框" code={demo.disabled}>
          <div className='demo-input-wrap'>
            <Input disabled={true} placeholder="不可输入" />
          </div>
        </DemoWrap>
        <DemoWrap desc="value, 可以设置input的值" code={demo.value}>
          <div className='demo-input-wrap'>
            <Input value={ 123 }/>
          </div>
        </DemoWrap>
        <DemoWrap desc="type，定义原生的input的类型" code={demo.type}>
          <div className='demo-input-wrap'>
            <Input type="password" placeholder="type为password"/>
          </div>
        </DemoWrap>
        <DemoWrap desc="addon，可以给输入框添加前缀和后缀" code={demo.addon}>
          <div className='demo-input-wrap'>
            <Input addonBefore="http://" addonAfter=".com" />
          </div>
          <div className='demo-input-wrap'>
            <Input addonBefore="搜索框" addonAfter={<Icon type='search' />} />
          </div>
        </DemoWrap>
        <DemoWrap desc="radius，设置该属性可以让input输入框更加的圆滑美观" code={demo.radius}>
          <div className='demo-input-wrap'>
            <Input radius="radius" placeholder="设置了圆角"/>
          </div>
        </DemoWrap>
        <DemoWrap desc="maxlength, 可以设置输入框最多输入多少字符" code={demo.maxlength}>
          <div className='demo-input-wrap'>
            <Input maxLength={5} placeholder="最多可输入五个字符" />
          </div>
        </DemoWrap>
        <ReactMarkdown source={demo.api} />
      </div>
    );
  }
}

export default ButtonPage;
