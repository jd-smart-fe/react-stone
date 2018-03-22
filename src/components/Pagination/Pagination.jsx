import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import style from './pagination.scss';

class Pagination extends Component {
  render() {
    const { current, pageSize, total } = this.props;
    let liArr = [];
    let pageTotle = Math.ceil(total / pageSize);
    const centerIndex = Math.floor(pageTotle / 2);
    // 当小于10页时，展示所有页码
    // 当大于10页时，会显示省略符
    for (let i = 0; i < pageTotle; i += 1) {
      // 如果小于10页，则直接展示10页
      if (pageTotle < 10) {
        liArr.push(<li className={this.getClassName(i, current)} onClick={this.pageClick} key={i}>{ i + 1 }</li>);
      } else if (pageTotle >= 10 && current < 5) {
        // 大于10页需要显示分页
        // 如果当前的选择的页码小于5，则显示左边5个页码+右边一个省略符+最后一页
        if (i < 5) {
          liArr.push(<li className={this.getClassName(i, current)} onClick={this.pageClick} key={i}>{ i + 1 }</li>);
        } else if ((i + 1) === pageTotle) {
          liArr.push(<span className="page-num disabled" key={new Date()}>...</span>);
          liArr.push(<li className={this.getClassName(i, current)} onClick={this.pageClick} key={i}>{ i + 1 }</li>);
        }
      } else if (pageTotle >= 10 && current >= 5) {
        // 大于10页需要显示分页
        // 如果当前的选择的页码大于等于5，则必定显示左边第一页+左边一个省略符
        if (i === 0) {
          liArr.push(<li className={this.getClassName(i, current)} onClick={this.pageClick} key={i}>{ i + 1 }</li>);
          liArr.push(<span className="page-num disabled" key={new Date()}>...</span>);
        }
        // 如果当前选择的页码，距离结尾还有5页以上，则显示左边第一页+左边一个省略符+中间五页+右边省略符+最后一页
        if (current <= (pageTotle - 5)) {
          if (i >= (current - 3) && i < (current + 2)) {
            liArr.push(<li className={this.getClassName(i, current)} onClick={this.pageClick} key={i}>{ i + 1 }</li>);
          } else if ((i + 1) === pageTotle) {
            liArr.push(<span className="page-num disabled" key={new Date()}>...</span>);
            liArr.push(<li className={this.getClassName(i, current)} onClick={this.pageClick} key={i}>{ i + 1 }</li>);
          }
        }
        // 如果当前选择的页码，距离结尾还有不到5页，则显示左边第一页+左边一个省略符+最后6页
        if (current > (pageTotle - 5)) {
          if ((i + 1) > pageTotle - 6) {
            liArr.push(<li className={this.getClassName(i, current)} onClick={this.pageClick} key={i}>{ i + 1 }</li>);
          } else if ((i + 1) === pageTotle) {
            liArr.push(<span className="page-num disabled" key={new Date()}>...</span>);
            liArr.push(<li className={this.getClassName(i, current)} onClick={this.pageClick} key={i}>{ i + 1 }</li>);
          }
        }
      }
    }
    return (
      <div className="page-action">
        <li className="page-num page-text" onClick={this.jumpFristPage}>首页</li>
        <li className="page-num page-text" onClick={this.jumpPrevPage}>上一页</li>
        {liArr}
        <li className="page-num page-text" onClick={this.jumpNextPage}>下一页</li>
        <li className="page-num page-text" onClick={this.jumpLastPage}>尾页</li>
      </div>
    );
  }
  pageClick = (e) => {
    this.props.onChange(Number.parseInt(e.target.innerHTML, 10));
  }
  // 获取页码的class，用来区分是否是选中态度
  getClassName = (i, current) => {
    const classStr = (i + 1) === current ? 'page-num current' : 'page-num';
    return classStr;
  }
  jumpFristPage = () => {
    this.props.onChange(1);
  }
  jumpPrevPage = () => {
    if (this.props.current === 1) {
      return;
    }
    this.props.onChange(this.props.current - 1);
  }
  jumpNextPage = () => {
    if (this.props.current === Math.ceil(this.props.total / this.props.pageSize)) {
      return;
    }
    this.props.onChange(this.props.current + 1);
  }
  jumpLastPage = () => {
    this.props.onChange(Math.ceil(this.props.total / this.props.pageSize));
  }
}

Pagination.defaultProps = {
  current: 1,
  pageSize: 10,
  total: 10,
  onChange: () => {},
};

Pagination.propTypes = {
  current: PropTypes.number,
  pageSize: PropTypes.number,
  total: PropTypes.number,
  onChange: PropTypes.func,
};


export default Pagination;
