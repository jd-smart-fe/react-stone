import React from 'react';
import classNames from 'classnames';
import './CascaderSelection.scss';

class CascadeSelection extends React.Component {
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
  }
  showPanel() {
    this.setState(prevState => ({
      cascadePanelShow: !prevState.cascadePanelShow,
    }));
  }
  closePanel() {
    this.setState({
      cascadePanelShow: false,
    });
  }
  selectData(data) {
    this.setState({ selectedData: data }, () => {
      this.props.cascaderSelect(this.state.selectedData);
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
          <span className='select-arrow icon-dowico' />
          <span className='selected-label' title={selectedOptionLabel}>
            {selectedOptionLabel}
          </span>
        </div>
        <CascadePanel
          optionData={this.state.optionData}
          closePanel={this.closePanel}
          cascadePanelShow={this.state.cascadePanelShow}
          updateSelectedData={this.selectData}
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
    };
    this.closePanel = this.closePanel.bind(this);
    this.selectCurrentOptionClass = this.selectCurrentOptionClass.bind(this);
    this.traversalAllOptionData = this.traversalAllOptionData.bind(this);
    this.selecteAll = this.selecteAll.bind(this);
  }
  closePanel() {
    this.props.closePanel();
  }
  // 点击某一类别下的项
  updateChildren(item) {
    item.parent = this.state.currentOptionClass;
    let existSelectedCategoryArr = this.state.selectedCategoryArr;
    existSelectedCategoryArr.forEach((ele, index) => {
      // 去掉同一级的选中类
      if (ele.parent.value === this.state.currentOptionClass.value) {
        existSelectedCategoryArr.splice(index, 1);
      }
    });
    existSelectedCategoryArr = [...existSelectedCategoryArr, item]; // 添加新的选中类
    const newSelectedCategoryArr = [];
    const hashFlag = {};
    existSelectedCategoryArr.forEach(ele => {
      if (!hashFlag[ele.value]) {
        hashFlag[ele.value] = true;
        newSelectedCategoryArr.push(ele);
      }
    });
    let selectedValue = '';
    let selectedLabel = '';
    if (item.children) {
      // 存在下级类目时，更新显示的类别项
      this.setState(
        {
          optionData: item.children,
          currentOptionClass: item,
          selectedCategoryArr: newSelectedCategoryArr, // 添加Tab
        },
        () => console.log(this.state),
      );
    } else {
      newSelectedCategoryArr.forEach(ele => {
        // newSelectedCategoryArr
        selectedValue += `${ele.value}/`;
        selectedLabel += `${ele.label}/`;
      });
      this.setState(
        {
          selectedData: { value: selectedValue, label: selectedLabel },
        },
        () => {
          this.props.updateSelectedData(this.state.selectedData); // 更新父组件中显示的选中项
          this.props.closePanel();
          console.log(this.state);
        },
      );
    }
  }
  // 点击全部 选中整个大类
  selectCurrentOptionClass() {
    this.props.updateSelectedData(this.state.currentOptionClass);
    this.props.closePanel();
  }
  // 点击分类Tab切换类别
  tabOptionClass(data) {
    const allOptionData = this.props.optionData;
    this.setState({ currentOptionClass: data });
    this.traversalAllOptionData(allOptionData, data);
  }
  traversalAllOptionData(arr, data) {
    try {
      // 解决forEach()无法使用break、continute\retutn false跳出循环的问题
      arr.forEach(item => {
        if (item.value === data.value) {
          this.setState({
            optionData: item.children,
          });
          throw new Error('brack');
        } else {
          this.traversalAllOptionData(item.children, data);
        }
      });
    } catch (err) {
      console.log(err);
    }
  }
  // 选择‘全部类目’
  selecteAll() {
    this.setState(
      {
        optionData: this.props.optionData,
        currentOptionClass: {
          value: 'all',
          label: '全部类目',
        },
        selectedData: { value: '', label: '' },
        selectedCategoryArr: [],
      },
      () => {
        this.props.updateSelectedData(this.state.currentOptionClass);
        // this.props.closePanel();
      },
    );
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
                className='option-class'
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
          <li className='option' onClick={this.selectCurrentOptionClass}>
            全部
          </li>
          {this.state.optionData.map(item => {
            return (
              <li
                className='option'
                key={item.value}
                onClick={this.updateChildren.bind(this, item)}
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

export default CascadeSelection;
