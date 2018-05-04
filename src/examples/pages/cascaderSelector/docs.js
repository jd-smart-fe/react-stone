const desc = `
  # CascaderSelector
  级联选择
`;

const base = `
  \`\`\`jsx
  import React, { Component } from 'react';
  import CascaderSelector from '../../../components/CascaderSelector/CascaderSelector.jsx';


  class App extends Component {
    constructor(props) {
      super(props);
      this.state={
        dataSource:[
          {
            value: ' television',
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
              value: 'samrtFridge',
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
        ]
      }
      this.cascaderSelect = this.cascaderSelect.bind(this);
    }
    cascaderSelect(data){
      console.log('CascaderSelector value:--->' ,data);
    }


    render() {
      return (
        <CascaderSelector
          optionData={this.state.dataSource}
          onChange={this.cascaderSelect}
        />
      );
    }
  }

  export default App;

  \`\`\`
`;
const initialValue = `
  \`\`\`jsx
  import React, { Component } from 'react';
  import CascaderSelector from '../../../components/CascaderSelector/CascaderSelector.jsx';


  class App extends Component {
    constructor(props) {
      super(props);
      this.state={
        dataSource:[
          {
            value: ' television',
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
              value: 'samrtFridge',
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
        <CascaderSelector
          optionData={this.state.dataSource}
          onChange={this.cascaderSelect}
          initialValue = {this.state.initialValue}
        />
      );
    }
  }

  export default App;

  \`\`\`
`;

const api = `
## Options

属性名   |    类型   |     默认值     |     说明
----    | ----    | ----    | ----    |
optionData  | array  | 无 |   数据源
initialValue | array | 无 | 默认值、初始值




## Events
方法名称   |    说明    |    参数    |
----    | ----      | ----        |
onChange       |  已选数据改变的回调 | 参数是选中的数据
`;

export {
  desc,
  base,
  initialValue,
  api,
};
