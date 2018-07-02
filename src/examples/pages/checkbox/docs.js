const desc = `
  # Checkbox
  多选框，在一组可选项中进行多项选择时使用。
`;

const base = `
  \`\`\`jsx
  import React, { Component } from 'react';
  import ReactDOM from 'react-dom';
  import { CheckboxGroup } from 'react-stone';

  class App extends Component {
    constructor(props) {
      super(props)
      this.state = {
        options: [
          { label: 'Apple', value: 'Apple' },
          { label: 'Pear', value: 'Pear' },
          { label: 'Orange', value: 'Orange' },
        ],
        checkedBox: [
          'Pear'
        ]
      }
    }
    checkedBoxChange = (checkedList, targetValue) => {
      console.log(checkedList);
      console.log(targetValue);
    }
    render(){
      return (
        <CheckboxGroup
          options={this.state.options}
          onChange={this.checkedBoxChange}
          defaultValue={['Apple']}
          value={this.state.checkedBox}/>
      )
    }
  }

  ReactDOM.render(<App />, document.getElementById('root'));
  \`\`\`
`;

const defaultvalue = `
  \`\`\`jsx
  import React, { Component } from 'react';
  import ReactDOM from 'react-dom';
  import { CheckboxGroup } from 'react-stone';

  class App extends Component {
    constructor(props) {
      super(props)
      this.state = {
        options: [
          { label: '肯德基', value: '肯德基' },
          { label: '麦当劳', value: '麦当劳' },
          { label: '德克士', value: '德克士' },
        ],
        checkedBox: [
          'Pear'
        ]
      }
    }
    checkedBoxChange = (checkedList, targetValue) => {
      console.log(checkedList);
      console.log(targetValue);
    }
    render(){
      return (
        <CheckboxGroup
          options={this.state.options}
          onChange={this.checkedBoxChange}
          defaultValue={['肯德基']}
          value={this.state.checkedBox}/>
      )
    }
  }

  ReactDOM.render(<App />, document.getElementById('root'));
  \`\`\`
`;

const disabled = `
  \`\`\`jsx
  import React, { Component } from 'react';
  import ReactDOM from 'react-dom';
  import { CheckboxGroup } from 'react-stone';

  class App extends Component {
    constructor(props) {
      super(props)
      this.state = {
        options: [
          { label: '耐克', value: 'Nike', disabled: true },
          { label: '阿迪达斯', value: 'Adidas', disabled: true },
        ],
        checkedBox: [
          'Pear'
        ]
      }
    }
    checkedBoxChange = (checkedList, targetValue) => {
      console.log(checkedList);
      console.log(targetValue);
    }
    render(){
      return (
        <CheckboxGroup
          options={this.state.options}
          onChange={this.checkedBoxChange}
          value={this.state.checkedBox}/>
      )
    }
  }

  ReactDOM.render(<App />, document.getElementById('root'));
  \`\`\`
`;

const api = `
  ## Options

  属性名   |    类型   |     默认值     |     说明
  ----    | ----    | ----    | ----    |
  options  | Array  | '' |  指定可选项
  defaultValue | Array | '' | 默认选中的选项
  value | Array | '' | 指定选中的选项
  disabled | Bool | false | 定义该选项是否可操作。只能在options里配置。

  ## Events
  方法名称   |    说明    |    参数    |
  ----    | ----      | ----        |
  onChange | 用于CheckboxGroup上，在选项发生变化时触发 | 参数为(checkedList, targetValue), 被选中的列表和刚刚被点击的值
`;

export {
  desc,
  base,
  defaultvalue,
  disabled,
  api,
};
