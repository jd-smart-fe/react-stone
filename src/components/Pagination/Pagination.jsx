import React, { Component } from "react";
import PropTypes from 'prop-types';
import style from "./pagination.scss";

class Pagination extends Component {
  constructor(props) {
    super(props)
  }
  pageClick = (e) => {
    console.log(e.target.innerHTML);
    this.props.onChange(parseInt(e.target.innerHTML));
  }
  render() {
    const { current, defaultCurrent, defaultPageSize, pageSize, total } = this.props;
    let liArr = [];
    let pageTotle = Math.ceil(total/pageSize);
    const centerIndex = Math.floor(pageTotle/2);
    for (let i = 0; i < pageTotle; i++) {
      if ((i + 1) === current) {
        liArr.push(<li class="page-num current" onClick={this.pageClick}>{ i + 1 }</li>);
      } else {
        liArr.push(<li class="page-num" onClick={this.pageClick}>{ i + 1 }</li>);
      }
      if (i === centerIndex && i >= 3) {
        liArr.push(<span class="page-num disabled" onClick={this.pageClick}>...</span>);
      }

    }
    return (
      <div class="page-action">
        <li class="page-num page-text" onClick={this.jumpFristPage}>首页</li>
        <li class="page-num page-text" onClick={this.jumpPrevPage}>上一页</li>
        {liArr}
        <li class="page-num page-text" onClick={this.jumpNextPage}>下一页</li>
        <li class="page-num page-text" onClick={this.jumpLastPage}>尾页</li>
      </div>
    );
  }
  jumpFristPage = () => {
    this.props.onChange(1);
  }
  jumpPrevPage = () => {

  }
  jumpNextPage = () => {

  }
  jumpLastPage = () => {
    this.props.onChange(Math.ceil(this.props.total/this.props.pageSize));
  }
}

Pagination.defaultProps = {
  current: 1,
  defaultCurrent: 1,
  onChange: () => {}
}

Pagination.propTypes = {
  onChange: PropTypes.func,
}


export default Pagination;
