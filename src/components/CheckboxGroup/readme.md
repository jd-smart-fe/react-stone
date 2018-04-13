# CheckboxGroup 多选框组
多选框。

## 何时使用

- 在一组可选项中进行多项选择时


## How to use?

```javascript
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { CheckboxGroup } from from 'react-stone';

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
```


## Options

属性名   |    类型   |     默认值     |     说明
----    | ----    | ----    | ----    |
options  | Array  | '' |  指定可选项
defaultValue | Array | '' | 默认选中的选项
value | Array | '' | 指定选中的选项

## Events
方法名称   |    说明    |    参数    |
----    | ----      | ----        |
onChange | 用于CheckboxGroup上，在选项发生变化时触发 | 参数为(checkedList, targetValue), 被选中的列表和刚刚被点击的值
