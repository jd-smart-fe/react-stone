import React, { Component } from 'react';
import { withRouter } from 'react-router';
import ReactMarkdown from 'react-markdown';
import CascaderSelector from '../../../components/CascaderSelector/CascaderSelector.jsx';

import * as code from './docs.js';
import DemoWrap from '../../components/DemoWrap/DemoWrap';

class CascaderSelectorPage extends Component {
  constructor(props) {
    super(props);
    this.state={
      dataSource:[
        {
          value: 'television',
          label: '电视',
          children: [{
            value: 'curveScreen',
            label: '曲面电视',
            children: [{
              value: 'smart',
              label: '智能电视',
            },
            {
              value: 'normal',
              label: '普通电视',
            }],
          }],
        }, {
          value: 'fridge',
          label: ' 冰箱',
          children: [{
            value: 'doors',
            label: '多门',
            children: [{
              value: 'three',
              label: '三门',
            },
            {
              value: 'oppose',
              label: '对开门',
            },
            {
              value: 'two',
              label: ' 双门',
            },
            {
              value: 'single',
              label: ' 单门',
            }],
          },
          {
            value: 'smartFridge',
            label: '智能冰箱',
            children: [{
              value: 'voice',
              label: ' 声控',
            },
            {
              value: 'screenble',
              label: '有屏',
            },
            {
              value: 'touchSrceen',
              label: '触屏',
            },
            {
              value: 'light',
              label: '小夜灯',
            }],
          }],
        }
      ],
      initialValue:['television','curveScreen','smart']
    }
    this.cascaderSelect = this.cascaderSelect.bind(this);
  }
  componentDidMount(){
    console.log(this.props)
  }
  cascaderSelect(data){
    console.log('CascaderSelector value:--->' ,data);
  }


  render() {
    return (
      <div className="markdown">
        <ReactMarkdown source={code.desc} />
        <h2>代码示例</h2>
        <DemoWrap desc="基础用法，最基础的级联选择器" code={code.base}>
          <CascaderSelector
            optionData={this.state.dataSource}
            onChange={this.cascaderSelect}
          />
          <br/>
        </DemoWrap>
        <DemoWrap desc="有初始值得级联选择器" code={code.initialValue}>
          <CascaderSelector
            optionData={this.state.dataSource}
            onChange={this.cascaderSelect}
            initialValue = {this.state.initialValue}
          />
          <br/>
        </DemoWrap>
       <ReactMarkdown source={code.api} />
      </div>
    );
  }
}

export default withRouter(CascaderSelectorPage);
