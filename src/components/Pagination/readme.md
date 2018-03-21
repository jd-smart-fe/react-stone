# Pagination 分页组件

 - 采用分页的形式分隔长列表，每次只加载一个页面。

## 何时使用

  - 当加载/渲染所有数据将花费很多时间时；
  - 可切换页码浏览数据。

## How to use?

```javascript
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Pagination } from 'ceshi-stone';

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
        <Paginations total={100} pageSize={10} current={this.state.currentPage} onChange={this.pageChange}></Paginations>
      </div>
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
