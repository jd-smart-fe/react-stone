##  支持属性
1. defaultValue:obj  select的默认值 传入一个对象 如：{'value':'1','label':'3个月'}
2. size:选择框的尺寸，可选值 'large', 'normal', 'small',三个尺寸的高度分别为40px、36px和30px。
3. placeholder 选择类目提示 placeholder
4. optionData 必填 select选项
##  支持事件
1. onChange:在选择下拉选项变化时触发，接受一个参数，参数为选项对象{'value':'','label':''}



# Select 下拉组件

 - 采用分页的形式分隔长列表，每次只加载一个页面。

## 何时使用

  - 弹出一个下拉菜单给用户选择操作，用于代替原生的选择器，或者需要一个更优雅的多选器时。
  - 当选项少时（少于 5 项），建议直接将选项平铺，使用 Radio 是更好的选择。

## How to use?

```javascript
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Select from 'ceshi-stone';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentPage: 5
    }
  }
  render(){
    return (
      <Select
        size="normal"
        optionData={saleVolumes}
        onChange={selectChange}/>
    )
  }
  pageChange = (page) => {
    this.setState({
      currentPage: page
    })
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

```


## Options

属性名   |    类型   |     默认值     |     说明
----    | ----    | ----    | ----    |
total  | Number  | 无 |  定义总条数
pageSize | Number | 10 | 定义每页显示的size
current | Number | 1 | 当前被选中的页码



## Events
方法名称   |    说明    |    参数    |
----    | ----      | ----        |
onChange | 页码改变的回调 | 参数是改变后的页码
