import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Cascader.scss';

class Cascader extends Component {
  constructor(props) {
    super(props);
    const processOptions = [];
    processOptions.push([...this.props.options]);
    this.state = {
      popupVisible: false,
      placeholder: this.props.placeholder,
      // 原始的数据
      options: [...this.props.options],
      // 展示在ul中的数据
      processOptions,
      // 被选中元素的数据
      selectedList: [],
    };
    this.togglePopup = this.togglePopup.bind(this);
    this.getCascadeData = this.getCascadeData.bind(this);
    this.GetInsertIndex = this.GetInsertIndex.bind(this);
    this.findParent = this.findParent.bind(this);
    this.addSlectedToProcessOptions = this.addSlectedToProcessOptions.bind(this);
    this.setProcessOptionsSelectedFalse = this.setProcessOptionsSelectedFalse.bind(this);
  }
  /** 控制级联信息的显示隐藏 */
  togglePopup() {
    this.setProcessOptionsSelectedFalse();
    this.setState({
      popupVisible: !this.state.popupVisible,
    });
  }
  /** 获取级联数据 */
  getCascadeData(itemValue) {
    const casProcessOptions = this.state.processOptions;
    /**
     * 循环数据 （这段逻辑让我很好的理解了什么是数据驱动啊！）
     * 逻辑: 点击元素的时候，casProcessOptions 分为两种情况，
     * 一种是itemValue 存在位置的下一位也就是casProcessOptions[wrapIndex+1]没有数据，这种情况就是顺序的增加，
     * 一种是itemValue 下一位有数据，这种就是变化，需要把此位后的数据清空；
     */
    console.log(itemValue);
    casProcessOptions.map((wrapItem, wrapIndex) => {
      wrapItem.map((item, index) => {
        if (itemValue === item.value) {
          this.addSlectedToProcessOptions(wrapIndex, index);
          const nextWrapIndex = wrapIndex + 1;
          // 切换
          if (casProcessOptions[nextWrapIndex]) {
            const deleteLen = casProcessOptions.length - wrapIndex - 1;
            casProcessOptions.splice(nextWrapIndex, deleteLen);
            this.setState({
              processOptions: casProcessOptions,
            }, () => {
              const posIndex = this.GetInsertIndex(casProcessOptions, itemValue);
              if (item.children) {
                casProcessOptions.splice(posIndex, 1, item.children);
              } else {
                const selectedList = this.findParent(this.state.options, item);
                this.setState({
                  selectedList,
                  popupVisible: false,
                });
              }
              this.setState({
                processOptions: casProcessOptions,
              });
            });
          } else {
            const posIndex = this.GetInsertIndex(casProcessOptions, itemValue);
            if (item.children) {
              casProcessOptions.splice(posIndex, 1, item.children);
            } else {
              const selectedList = this.findParent(this.state.options, item);
              console.log(selectedList);
              this.setState({
                selectedList,
                popupVisible: false,
              });
            }
            this.setState({
              processOptions: casProcessOptions,
            });
          }
        }
      });
    });
  }
  /** 得到插入数据的位置 */
  GetInsertIndex(array, value) {
    let posIndex;
    array.map((casProItems, index) => {
      let testIndex = index;
      casProItems.map((casProItem) => {
        if (casProItem.value === value) {
          posIndex = testIndex + 1;
          return;
        }
      });
    });
    return posIndex;
  }

  /** 查找父节点: 知道子节点了，从而查找所有的父节点
   */
  findParent = (zNodes, node) => {
    const parents = [];
    let going = true;

    const walker = (zcNodes, cnode) => {
      zcNodes.forEach(item => {
        if (!going) return;
        const pushItem = {
          label: item.label,
          value: item.value,
        };
        parents.push(pushItem);
        if (item.value === cnode.value) {
          going = false;
        } else if (item.children) {
          walker(item.children, cnode);
        } else {
          parents.pop();
        }
      });
      if (going) parents.pop();
    };

    walker(zNodes, node);

    return parents;
  }
  /** 给processOptions 合适的位置添加selected */
  addSlectedToProcessOptions(index, targetIndex) {
    const { processOptions } = this.state;
    console.log(processOptions[index]);
    processOptions[index].map((item, i) => {
      targetIndex === i ? item.selected = true : item.selected = false;
    });
  }
  /** 所有processOptions 的设置的selected 设置为false */
  setProcessOptionsSelectedFalse() {
    const processOptions = [];
    processOptions.push([...this.props.options]);
    processOptions.map((wrapItem) => {
      wrapItem.map((item) => {
        item.selected = false;
      });
    });
    this.setState({
      processOptions,
    });
  }

  render() {
    const arrowClass = classNames({
      anticon: true,
      'icon-dowico': true,
      'ant-cascader-picker-arrow': true,
      'ant-cascader-picker-arrow-expand': this.state.popupVisible,
    });
    const optionPanelClass = classNames({
      'ant-cascader-menus': true,
      'ant-cascader-menus-placement-bottomLeft': true,
      'ant-cascader-menus-hidden': !this.state.popupVisible,
    });

    return (
      <div>
        <span className="ant-cascader-picker" tabIndex="0" onClick={this.togglePopup}>
          <span className="ant-cascader-picker-label">{this.state.selectedList && this.state.selectedList.length > 0 ? this.state.selectedList[this.state.selectedList.length - 1].label : this.state.placeholder}</span>
          <input
            type="text"
            className="ant-input ant-cascader-input"
            autoComplete="off"
          />
          <i className={arrowClass}></i>
        </span>
        <div>
          <div>
            <div
              className={optionPanelClass}>
              {this.state.processOptions.map((proItem) => {
                return (
                  <ul
                    className="ant-cascader-menu"
                  >
                    {proItem.map((item) => {
                      const liClass = classNames({
                        'ant-cascader-menu-item': true,
                        'ant-cascader-menu-item-active': item.selected ? true : false,
                      });
                      let node = (<li
                        className={liClass}
                        title={item.label}
                        value={item.value}
                        onClick={this.getCascadeData.bind(this, item.value)}
                      >
                        {item.label}
                      </li>);
                      if (item.children && item.children.length) {
                        node = (<li
                          className={liClass}
                          title={item.label}
                          value={item.value}
                          onClick={this.getCascadeData.bind(this, item.value)}
                        >
                          {item.label}
                          <i className="icon-dowico"></i>
                        </li>);
                      }
                      return node;
                    })}
                  </ul>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Cascader.defaultProps = {
  placeholder: '请选择',
  options: [],
};

Cascader.propTypes = {
  placeholder: PropTypes.string,
  options: PropTypes.array,
};

export default Cascader;
