import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import Button from '../../../components/Button/Button';
import Pagination from '../../../components/Pagination/Pagination';
import Icon from '../../../components/Icon/Icon';
import * as code from './docs.js';
import DemoWrap from '../../components/DemoWrap/DemoWrap';

class Docs extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentPage: 5
    }
  }
  pageChange = (page) => {
    this.setState({
      currentPage: page
    })
  }
  render() {
    return (
      <div className="markdown">
        <ReactMarkdown source={code.desc} />
        <h2>代码示例</h2>
        <DemoWrap desc="基础用法" code={code.base}>
          <div>
            <Pagination total={100} pageSize={10} current={this.state.currentPage} onChange={this.pageChange}></Pagination>
          </div>
        </DemoWrap>
        <ReactMarkdown source={code.api} />
      </div>
    );
  }
}

export default Docs;
