import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Cascader.scss';

class Cascader extends Component {
  constructor(props) {
    super(props);
    const processOptions = [];
    processOptions.push([...this.props.options]);
    this.state = {
      popupVisible: false,
      placeholder: this.props.placeholder,
      options: [...this.props.options],
      processOptions,
    };
    this.togglePopup = this.togglePopup.bind(this);
    this.getCascadeData = this.getCascadeData.bind(this);
    this.GetInsertIndex = this.GetInsertIndex.bind(this);
  }
  /** 控制级联信息的显示隐藏 */
  togglePopup() {
    const processOptions = [];
    processOptions.push([...this.props.options]);
    this.setState({
      popupVisible: !this.state.popupVisible,
      processOptions,
    });
  }
  /** 获取级联数据 */
  getCascadeData(itemValue) {
    const processOptions = [];
    processOptions.push([...this.props.options]);
    this.setState({
      processOptions,
    }, () => {
      const casProcessOptions = this.state.processOptions;
      casProcessOptions[casProcessOptions.length - 1].map((item) => {
        if (itemValue === item.value) {
          const posIndex = this.GetInsertIndex(casProcessOptions, itemValue);
          casProcessOptions.splice(posIndex, 1, item.children);
          this.setState({
            processOptions: casProcessOptions,
          });
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

  componentDidMount() {
    console.log(this.state.processOptions);
  }

  render() {
    return (
      <div>
        <span className="ant-cascader-picker" tabIndex="0" onClick={this.togglePopup}>
          <span className="ant-cascader-picker-label">{this.state.placeholder}</span>
          <input type="text" className="ant-input ant-cascader-input " value="" autoComplete="off" />
          <i className="anticon icon-dowico ant-cascader-picker-arrow"></i>
        </span>
        <div>
          <div>
            {!this.state.popupVisible ? '' :
              <div className="ant-cascader-menus ant-cascader-menus-placement-bottomLeft">
                {this.state.processOptions.map((proItem) => {
                  return (
                    <ul
                      className="ant-cascader-menu"
                      key={proItem.value}
                    >
                      {proItem.map((item) => {
                        let node = (<li
                          className="ant-cascader-menu-item"
                          title={item.label}
                          value={item.value}
                          key={item.value}
                        >
                          {item.label}
                        </li>);
                        if (item.children && item.children.length) {
                          node = (<li
                            className="ant-cascader-menu-item"
                            key={item.value}
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
            }
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
