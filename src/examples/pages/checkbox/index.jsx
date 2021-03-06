import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import CheckboxGroup from '../../../components/CheckboxGroup/CheckboxGroup';
import Icon from '../../../components/Icon/Icon';
import * as code from './docs.js';
import DemoWrap from '../../components/DemoWrap/DemoWrap';

class ButtonPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      BaseOptions: [
        { label: 'Apple', value: 'Apple' },
        { label: 'Pear', value: 'Pear' },
        { label: 'Orange', value: 'Orange' },
      ],
      BaseCheckedBox: [
        'Pear', 'Apple'
      ],
      DefaultOptions: [
        { label: '肯德基', value: '肯德基' },
        { label: '麦当劳', value: '麦当劳' },
        { label: '德克士', value: '德克士' },
      ],
      DefaultCheckedBox: [
        '麦当劳'
      ],
      DisabledOptions: [
        { label: '耐克', value: 'Nike', disabled: true },
        { label: '阿迪达斯', value: 'Adidas', disabled: true },
      ],
      DisabledChecked: [
        'Pear'
      ],
    }
  }
  BaseCheckedChange = (checkedList, targetValue) => {
    console.log(checkedList);
    console.log(targetValue);
  }
  DefaultCheckedChange = (checkedList, targetValue) => {
    console.log(checkedList);
    console.log(targetValue);
  }
  DisabledCheckedChange = (checkedList, targetValue) => {
    console.log(checkedList);
    console.log(targetValue);
  }
  render() {
    return (
      <div className="markdown">
        <ReactMarkdown source={code.desc} />
        <h2>代码示例</h2>
        <DemoWrap desc="基础用法" code={code.base}>
          <CheckboxGroup
            options={this.state.BaseOptions}
            onChange={this.BaseCheckedChange}
            value={this.state.BaseCheckedBox}/>
        </DemoWrap>
        <DemoWrap desc="有默认选中项" code={code.defaultvalue}>
          <CheckboxGroup
            options={this.state.DefaultOptions}
            onChange={this.DefaultCheckedChange}
            defaultValue={['肯德基']}
            value={this.state.DefaultCheckedBox}/>
        </DemoWrap>
        <DemoWrap desc="不可选择" code={code.disabled}>
          <CheckboxGroup
            options={this.state.DisabledOptions}
            onChange={this.DisabledCheckedChange}
            value={this.state.DisabledChecked}/>
        </DemoWrap>
        <ReactMarkdown source={code.api} />
      </div>
    );
  }
}

export default ButtonPage;
