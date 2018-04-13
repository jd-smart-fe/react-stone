import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import CascadeSelection from '../CascaderSelection/CascaderSelection.jsx';

import './transfer.scss';

class Transfer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      rightList: [],
      leftAllChecked: false,
    };
  }
  componentDidMount() {
    const dataList = this.props.dataSource;
    dataList.forEach(item => {
      item.id = item[this.props.dataKey];
      item.title = item[this.props.title];
    });
    this.setState(
      {
        list: dataList,
      },
      () => {
        console.log(this.state);
      },
    );
  }
  /* 点击左侧列表项 */
  clickLeftItem(data, index) {
    // 左侧列表项选中状态变化
    data.checked = !data.checked;
    const allList = this.state.list;
    allList.splice(index, 1, data);
    // 标记是否为全选状态
    let checkedCount = 0;
    allList.forEach(item => {
      if (item.checked) {
        checkedCount += 1;
      }
    });
    let leftAllChecked = false;
    if (checkedCount === allList.length) {
      leftAllChecked = true;
    } else {
      leftAllChecked = false;
    }
    this.setState({
      leftAllChecked,
      list: allList,
    });
    // 右侧列表
    const rightList = this.state.rightList || [];
    if (data.checked) {
      rightList.push(Object.assign({}, data));
      this.setState(
        {
          rightList,
        },
        () => {
          console.log(this.state);
          this.props.onChange(this.state.rightList);
        },
      );
    } else {
      rightList.forEach((item, i) => {
        if (item.id === data.id) {
          item.rightChecked = false;
          rightList.splice(i, 1);
        }
      });
      this.setState(
        {
          rightList,
        },
        () => {
          console.log(this.state);
          this.props.onChange(this.state.rightList);
        },
      );
    }
  }
  // 全选
  selectAll(e) {
    const val = e.target.checked;
    const allList = [...this.state.list];
    const rList = [...this.state.list];
    console.log(val);
    if (val) {
      allList.forEach(item => {
        item.checked = true;
      });
      this.setState(
        {
          list: allList,
          rightList: rList,
          leftAllChecked: true,
        },
        () => {
          console.log(this.state);
          this.props.onChange(this.state.rightList);
        },
      );
    }
  }
  // 反选
  selectReverse(e) {
    const val = e.target.checked;
    const rightList = [];
    if (val) {
      const allList = [...this.state.list];
      allList.forEach(item => {
        item.checked = !item.checked;
        if (item.checked) {
          rightList.push(item);
        }
      });
      this.setState(
        {
          list: allList,
          rightList,
          leftAllChecked: false,
        },
        () => {
          console.log(this.state);
          this.props.onChange(this.state.rightList);
        },
      );
    }
  }
  // 选中右侧列表项
  checkRightItem(item, index, event) {
    const value = event.target.checked;
    item.rightChecked = value;
    const rightList = [...this.state.rightList];
    rightList.splice(index, 1, item);
    console.log(rightList);
    this.setState(
      {
        rightList,
      },
      () => {
        console.log(this.state);
        this.props.onChange(this.state.rightList);
      },
    );
  }
  // 右侧面板  移除
  remove() {
    const rList = [...this.state.rightList];
    const leftList = [...this.state.list];
    console.log(leftList);
    console.log(rList);

    leftList.forEach(item => {
      rList.forEach(ele => {
        if (ele.rightChecked) {
          if (item.id === ele.id) {
            item.checked = false;
          }
        }
      });
    });
    for (let i = 0; i < rList.length; i += 1) {
      if (rList[i].rightChecked) {
        rList.splice(i, 1);
        i -= 1;
      }
    }
    this.setState(
      {
        list: leftList,
        rightList: rList,
        leftAllChecked: false,
      },
      () => {
        console.log(this.state);
        this.props.onChange(this.state.rightList);
      },
    );
  }
  // 全部清除
  cleanUp() {
    let leftList = this.state.list;
    leftList.forEach(item => {
      item.checked = false;
    });
    this.setState(
      {
        rightList: [],
        list: leftList,
        leftAllChecked: false,
      },
      () => {
        this.props.onChange(this.state.rightList);
      },
    );
  }
  // 搜索
  inputChange(e) {
    const val = e.target.value;
    this.props.searchEvent(val);
  }
  render() {
    return (
      <div className='transfer-wrapper'>
        <div className='left-panel'>
          {this.props.onSelect || this.props.onSearch ? (
            <div className='panel-title'>
              {this.props.onSelect ? (
                <CascadeSelection optionData={this.props.optionData} />
              ) : null}
              {this.props.onSearch ? (
                <div className='transfer-search-wraper'>
                  <input
                    className='transfer-search'
                    placeholder='请输入关键词'
                    onChange={this.inputChange.bind(this)}
                  />
                  <span className='search-icon' />
                </div>
              ) : null}
            </div>
          ) : null}
          <div className='panel-content'>
            <ul className='transfer-list-content'>
              {this.state.list.map((item, index) => (
                <li
                  className='transfer-list-item'
                  onClick={this.clickLeftItem.bind(this, item, index)}
                  key={item.id}
                >
                  {this.props.leftItemRender ? (
                    this.props.leftItemRender(item)
                  ) : (
                    <div>
                      <div className='item-title'>{item.title}</div>
                      {item.checked ? <span className='choosen' /> : null}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className='panel-footer'>
            <label>
              <input
                type='radio'
                name='controlAll'
                checked={this.state.leftAllChecked}
                onChange={this.selectAll.bind(this)}
              /> 全选
            </label>{' '}
            &nbsp;&nbsp;&nbsp;
            <label>
              <input
                type='radio'
                name='controlAll'
                onChange={this.selectReverse.bind(this)}
              /> 反选
            </label>
          </div>
        </div>
        <div className='right-panel'>
          <div className='panel-title'>
            {this.props.rightTitle}({this.state.rightList.length}个)
          </div>
          <div className='panel-content'>
            <ul className='transfer-list-content'>
              {this.state.rightList.map((item, index) => (
                <li className='transfer-list-item' key={item.id}>
                  <input
                    type='checkbox'
                    name='mm'
                    className='right-list-checkbox'
                    checked={item.rightChecked}
                    onChange={this.checkRightItem.bind(this, item, index)}
                  />
                  {this.props.rightItemRender ? (
                    this.props.rightItemRender(item)
                  ) : (
                    <div className='right-item-content'>
                      <span className='item-title'>{item.title}</span>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className='panel-footer'>
            <span className='remove' onClick={this.remove.bind(this)}>
              移除
            </span>
            <span className='clean-up' onClick={this.cleanUp.bind(this)}>
              全部清空
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Transfer;
