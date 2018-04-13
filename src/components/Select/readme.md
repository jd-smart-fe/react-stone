# Select 下拉组件

   下拉组件，用于较多选项让用户选择

## 何时使用

  - 弹出一个下拉菜单给用户选择操作，用于代替原生的选择器，或者需要一个更优雅的多选器时。
  - 当选项少时（少于 5 项），建议直接将选项平铺，使用 Radio 是更好的选择。

## How to use?

```javascript
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Select } from 'react-stone';

const saleVolumes = [
  {
    label: '<1000',
    value: 1
  },
  {
    label: '1001~10000',
    value: 2
  },
  {
    label: '10001~100000',
    value: 3
  },
  {
    label: '100001~1000000',
    value: 4
  },
  {
    label: '>1000000',
    value: 5
  }
];
const selectChange = (params) => {
  console.log(params);
}
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentPage: 5
    }
  }
  render(){
    return (
      <div>
        <Select
          size="large"
          placeholder="请选择"
          optionData={saleVolumes}
          onChange={selectChange}/>
        <Select
          size="large"
          defaultValue={3}
          optionData={saleVolumes}
          onChange={selectChange}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

```


## Options

属性名   |    类型   |     默认值     |     说明
----    | ----    | ----    | ----    |
defaultValue  | Object或Number或String  | 无 |  select的默认值 传入一个对象 如：{'value':'1','label':'3个月'}，也可单独传入一个值
size | String | 'normal' | 定义select组件的大小，可选值 'large', 'normal', 'small',三个尺寸的高度分别为40px、36px和30px。
placeholder | String | 无 | 当用户没有选择的提示
optionData | Object | 无 | 数据源，用于渲染选项
name | String | 无 | 定义表单字段，为form组件预留



## Events
方法名称   |    说明    |    参数    |
----    | ----      | ----        |
onChange | 在选择下拉选项变化时触发 | 接收到的参数为选项对象{'value':'','label':''}
