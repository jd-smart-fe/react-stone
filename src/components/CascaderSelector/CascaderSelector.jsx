import React from 'react';
import { findDOMNode } from 'react-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './cascaderSelector.scss';
import contains from '../../utils/contains';
import deepClone from '../../utils/deepClone';

class CascadeSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedData: null,
      cascadePanelShow: false,
      optionData: this.props.optionData,
    };
    this.showPanel = this.showPanel.bind(this);
    this.closePanel = this.closePanel.bind(this);
    this.selectData = this.selectData.bind(this);
    this.onDocumentClick = this.onDocumentClick.bind(this);
  }
  componentDidMount() {
    document.addEventListener('click', this.onDocumentClick);
  }
  componentWillUnmount() {
    document.removeEventListener('click', this.onDocumentClick);
  }
  onDocumentClick(e) {
    const tar = e.target;
    const root = findDOMNode(this);
    const popupDom = findDOMNode(this.popupComponent);
    // console.log(root);
    // console.log(popupDom);
    if (!contains(root, tar) && !contains(popupDom, tar)) {
      this.setState({
        cascadePanelShow: false,
      });
    }
  }
  showPanel(e) {
    this.setState(prevState => ({
      cascadePanelShow: !prevState.cascadePanelShow,
    }));
  }
  closePanel(e) {
    this.setState({
      cascadePanelShow: false,
    });
  }
  selectData(data) {
    console.log('selectedArray:--->', data);
    let selectedValue = '';
    let selectedLabel = '';
    if (data.length) {
      data.forEach(ele => {
        selectedValue += `${ele.value}/`;
        selectedLabel += `${ele.label}/`;
      });
      selectedValue = selectedValue.replace(/\/$/, '');
      selectedLabel = selectedLabel.replace(/\/$/, '');
    } else {
      selectedValue = 'all';
      selectedLabel = '全部类目';
    }
    this.setState({
      selectedData: { label: selectedLabel, value: selectedValue },
    }, () => {
      this.props.onChange(this.state.selectedData);
    });
  }
  render() {
    let selectedOptionLabel = this.state.selectedData
      ? this.state.selectedData.label
      : '全部类目';
    selectedOptionLabel = selectedOptionLabel.replace(/\/$/, '');
    return (
      <div className='cascade-wrap'>
        <div className='cascade-control' onClick={this.showPanel}>
          <span className={classNames({ 'select-arrow icon-dowico': true, open: this.state.cascadePanelShow })} />
          <span className='selected-label' title={selectedOptionLabel}>
            {selectedOptionLabel}
          </span>
        </div>
        <CascadePanel
          ref={ com => { this.popupComponent = com; }}
          optionData={this.state.optionData}
          closePanel={this.closePanel}
          cascadePanelShow={this.state.cascadePanelShow}
          updateSelectedData={this.selectData}
          initialValue = {this.props.initialValue}
        />
      </div>
    );
  }
}
class CascadePanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      optionData: props.optionData,
      currentOptionClass: {
        value: 'all',
        label: '全部类目',
      },
      selectedData: { value: '', label: '' },
      selectedCategoryArr: [],
      initialValue: props.initialValue || [],
    };
    this.closePanel = this.closePanel.bind(this);
    this.selectCurrentOptionClass = this.selectCurrentOptionClass.bind(this);
    this.traversalAllOptionData = this.traversalAllOptionData.bind(this);
    this.selecteAll = this.selecteAll.bind(this);
    this.getParent = this.getParent.bind(this);
    this.updateChildren = this.updateChildren.bind(this);
    this.getDefaultOption = this.getDefaultOption.bind(this);
    this.getDefaultChildren = this.getDefaultChildren.bind(this);
  }
  componentDidMount() {
    let { initialValue } = this.state;
    const { optionData } = this.state;
    initialValue = typeof initialValue === 'string' ? initialValue.split('/') : initialValue;
    if (initialValue.length === 1) {
      if (initialValue[0] === 'all') {
        this.setState({
          currentOptionAll: true,
        });
      } else {
        optionData.forEach((item, index) => {
          if (item.value === initialValue[0]) {
            this.updateChildren(item, this.state.selectedCategoryArr);
            this.props.updateSelectedData(item); // 更新父组件中显示的选中项
            this.setState({
              currentOptionAll: true,
            });
          }
        });
      }
    } else if (initialValue.length > 1) {
      this.getDefaultOption(optionData, optionData, initialValue);
    }
  }
  getParent(arr, ele) {
    let parent = null;
    function getParentData(array, elem) {
      array.forEach((item, index) => {
        if (item.value === elem) {
          parent = item;
        } else if (item.children) {
          getParentData(item.children, elem);
        }
      });
    }
    getParentData(arr, ele);
    parent = parent ? parent : { value: 'all', label: '全部类目' };
    return parent;
  }
  // 找到默认值的父级关系并设置激活状态，找到导航栏的数据，
  getDefaultOption(originArr, arr, data) {
    const { selectedCategoryArr } = this.state;
    arr.forEach((ele, index) => {
      data.forEach((item, idx) => {
        if (ele.value === item) {
          ele.active = true;
          ele.parent = this.getParent(originArr, data[idx - 1]);
          if (ele.parent.value !== 'all') {
            selectedCategoryArr.push(ele.parent);
            this.setState({
              selectedCategoryArr,
            });
          }
          if (ele.children) {
            this.getDefaultOption(originArr, ele.children, data);
          }
        }
      });
    });
    // console.log(originArr);
    // console.log(this.state);
    this.getDefaultChildren(originArr, data);// 获取选中值、导航栏数据、当前选中类别
  }
  getDefaultChildren(arr, data) {
    arr.forEach((ele, index) => {
      if (ele.value === data[data.length - 1]) {
        if (ele.children) {
          this.updateChildren(ele, this.state.selectedCategoryArr);
          this.props.updateSelectedData(ele);
          this.setState({
            currentOptionAll: true,
          });
        } else {
          this.updateChildren(ele, this.state.selectedCategoryArr);
          this.setState({
            optionData: ele.parent.children,
            currentOptionClass: ele.parent,
          });
        }
      } else if (ele.children) {
        this.getDefaultChildren(ele.children, data);
      }
    });
  }

  // 点击某一类别下的项
  clickChildren(item, e) {
    e.nativeEvent.stopImmediatePropagation();
    item.parent = this.state.currentOptionClass;
    const existSelectedCategoryArr = this.state.selectedCategoryArr;
    existSelectedCategoryArr.forEach((ele, index) => {
      // 去掉同一级的选中类
      if (ele.parent.value === this.state.currentOptionClass.value) {
        existSelectedCategoryArr.splice(index, 1);
      }
    });
    this.updateChildren(item, existSelectedCategoryArr);
  }
  updateChildren(item, existSelectedCategoryArr) {
    existSelectedCategoryArr = [...existSelectedCategoryArr, item]; // 添加新的选中类
    const newSelectedCategoryArr = [];
    const hashFlag = {};
    existSelectedCategoryArr.forEach(ele => {
      if (!hashFlag[ele.value]) {
        hashFlag[ele.value] = true;
        newSelectedCategoryArr.push(ele);
      }
    });
    if (item.children) {
      // 存在下级类目时，更新显示的类别项
      this.setState({
        optionData: item.children,
        currentOptionClass: item,
        selectedCategoryArr: newSelectedCategoryArr, // 添加Tab
      });
    } else {
      this.setState(
        {
          selectedData: newSelectedCategoryArr,
        },
        () => {
          this.props.updateSelectedData(this.state.selectedData); // 更新父组件中显示的选中项
          this.props.closePanel();
          // console.log(this.state);
        },
      );
    }
  }
  // 点击全部 选中整个大类
  selectCurrentOptionClass(e) {
    e.nativeEvent.stopImmediatePropagation();
    this.props.updateSelectedData(this.state.selectedCategoryArr);
    this.props.closePanel();
  }
  // 点击分类Tab切换类别
  tabOptionClass(data, e) {
    e.nativeEvent.stopImmediatePropagation();
    const allOptionData = this.props.optionData;
    let { selectedCategoryArr } = this.state;
    selectedCategoryArr.forEach((item, index) => { // 导航条不再展示下级分类
      if (item.value === data.value) {
        selectedCategoryArr = selectedCategoryArr.slice(0, index + 1);
      }
    });
    this.setState({ currentOptionClass: data, selectedCategoryArr });
    this.traversalAllOptionData(allOptionData, data); // 切换面板展示的下级类目
  }
  traversalAllOptionData(arr, data) {
    arr.forEach(item => {
      if (item.value === data.value) {
        this.setState({
          optionData: item.children,
        });
      } else if (item.children) {
        this.traversalAllOptionData(item.children, data);
      }
    });
  }
  // 选择‘全部类目’
  selecteAll(e) {
    this.setState({
      optionData: this.props.optionData,
      currentOptionClass: {
        value: 'all',
        label: '全部类目',
      },
      selectedData: [],
      selectedCategoryArr: [],
    });
  }
  // 关闭弹出层
  closePanel() {
    this.props.closePanel();
  }
  render() {
    const cascadePanelCls = classNames({
      'cascade-panel': true,
      show: this.props.cascadePanelShow,
    });
    return (
      <div className={cascadePanelCls}>
        <div className='white-bar' />
        <span className='close-panel icon-close' onClick={this.closePanel} />
        <div className='option-title'>
          <div className='option-class' onClick={this.selecteAll}>
            全部类目<span className='icon-dowico' />
          </div>

          {this.state.selectedCategoryArr.map(item => {
            return (
              <div
                className={classNames({ 'option-class': true, active: item.active })}
                key={item.label}
                onClick={this.tabOptionClass.bind(this, item)}
              >
                {item.label}
                <span className='icon-dowico' />
              </div>
            );
          })}
          <div className='option-class choose'>
            请选择<span className='icon-dowico' />
          </div>
        </div>
        <ul className='option-panel'>
          <li className={classNames({ option: true, active: this.state.currentOptionAll })} onClick={this.selectCurrentOptionClass}>
            全部
          </li>
          {this.state.optionData.map(item => {
            return (
              <li
                className={classNames({ option: true, active: item.active })}
                key={item.value}
                onClick={this.clickChildren.bind(this, item)}
              >
                {item.label}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
CascadeSelector.PropTypes = {
  optionData: PropTypes.array,
  cascadePanelShow: PropTypes.bool,
};

export default CascadeSelector;
