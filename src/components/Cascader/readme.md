# Cascader 级联选择
级联选择框



## How to use?

```jsx
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Cascader from '../../components/Cascader/Cascader.jsx';
import Icon from '../../components/Icon/Icon.jsx';

const options = [{
  value: 'zhejiang',
  label: 'Zhejiang',
  children: [{
    value: 'hangzhou',
    label: 'Hangzhou',
    children: [{
      value: 'xihu',
      label: 'West Lake',
    }],
  }],
}, {
  value: 'jiangsu',
  label: 'Jiangsu',
  children: [{
    value: 'nanjing',
    label: 'Nanjing',
    children: [{
      value: 'zhonghuamen',
      label: 'Zhong Hua Men',
    }],
  }],
}];

class App extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <div>
      <Cascader
       optionData={options}
       allowClear = {true}
      />
      </div>
    )
  }
}

export default App;

```

## Options

属性名   |    类型   |     默认值     |     说明   |
----    | ----    | ----    | ----    |
optionData  | Object  | - |  数据源 |
allowClear  | boolean  | true  |  是否支持清除 |
placeholder | String | '请选择' |  输入框占位文本' |
changeOnSelect | boolean | false | 当此项为 true 时，点选每级菜单选项值都会发生变化 |
disabled | boolean | false | 禁用 |
popupVisible | boolean | - | 控制浮层显隐 |
defaultValue | string[] | [] | 默认的选中项 |


*尚在开发中……*
