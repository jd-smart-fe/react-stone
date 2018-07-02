const desc = `
  # Modal
  模态对话框。
`;

const base = `
  \`\`\`jsx
  import React, { Component } from 'react';
  import ReactDOM from 'react-dom';
  import { Modal } from 'react-stone';

  class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        currentPage: 5
      };
    }
    pageChange = (page) => {
      this.setState({
        currentPage: page
      })
    }
    render(){
      return (
        <div>
          <Pagination total={100} pageSize={10} current={this.state.currentPage} onChange={this.pageChange}></Pagination>
        </div>
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
  total  | Number  | 无 |  定义总条数
  pageSize | Number | 10 | 定义每页显示的size
  current | Number | 1 | 当前被选中的页码



  ## Events
  方法名称   |    说明    |    参数    |
  ----    | ----      | ----        |
  onChange | 页码改变的回调 | 参数是改变后的页码
`;

export {
  desc,
  base,
  api,
};
