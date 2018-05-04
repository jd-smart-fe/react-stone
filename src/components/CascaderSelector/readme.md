## CascaderSelector级联选择器
## 何时使用
- 任何类目筛选的场景
## How to use?

```jsx
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { CascaderSelector } from 'react-stone';


class App extends Component {
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

ReactDOM.render(<App />, document.getElementById('root'));


```
## Options

属性名   |    类型   |     默认值     |     说明
----    | ----    | ----    | ----    |
optionData  | array  | 无 |   数据源
initialValue | array | 无 | 默认值、初始值




## Events
方法名称   |    说明    |    参数    |
----    | ----      | ----        |
onChange       |  已选数据改变的回调 | 参数是选中的数据