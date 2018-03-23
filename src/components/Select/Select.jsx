import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './select.scss';

class OptionPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: props.optionData,
    };
  }
  handleClick(option, e) {
    e.preventDefault();
    console.log(option);
    this.props.onSelect(option);
    this.props.optionData.map((item) => {
      if (item.value === option.value) {
        return item.active = true;
      }
      return item.active = false;
    });
  }
  render() {
    const optionArr = [];
    this.props.optionData.forEach((option) => {
      const itemClass = classNames({
        'option-item': true,
        'active': option.active,
      });
      optionArr.push(
        <li className={itemClass} key={option.value} value={option.value} onClick={this.handleClick.bind(this, option)}>{option.label}</li>
      );
    })
    const optionPanelClass = classNames({
      "option-panel": true,
      "option-panel-show": !this.props.closeStatus,
    });

    return (
      <div className={optionPanelClass}>
        <ul className="option-panel-content">
          {/* <li className="option-placeholder">{this.props.placeholder}</li> */}
          {optionArr}
        </ul>
      </div>

    )
  }

}
OptionPanel.defaultProps = {
  placeholder: '请选择任意选项',
};
class Select extends Component {
  constructor(props) {
    super(props);
    this.state = {
      closeStatus: true,
      selectedItem: '',
      count: 0,
    };
    this.showOptionPanel = this.showOptionPanel.bind(this);
    this.selectSomeOne = this.selectSomeOne.bind(this);
  }
  showOptionPanel(event) {
    let count = this.state.count;
    let dom = document.getElementById('optionPanelWrap');
    if (count !== 0) {
      if (dom && dom.parentNode.id !== this.props.name) {
        ReactDOM.unmountComponentAtNode(dom);
        dom.parentNode.removeChild(dom);
        dom = document.createElement('div');
        dom.id = 'optionPanelWrap'
        this.select.appendChild(dom);
        count++;
        this.setState(prevState => ({
          closeStatus: false,
          count: count,
        }), () => {
          ReactDOM.render(<OptionPanel optionData={this.props.optionData}
            onSelect={this.selectSomeOne}
            closeStatus={this.state.closeStatus}
            placeholder={this.props.placeholder} />,
            dom)
        });
      } else {
        this.setState(prevState => ({
          closeStatus: !prevState.closeStatus,
          count: 0,
        }), () => {
          ReactDOM.render(<OptionPanel optionData={this.props.optionData}
            onSelect={this.selectSomeOne}
            closeStatus={this.state.closeStatus}
            placeholder={this.props.placeholder} />,
            dom)
        });
      }
    } else {
      if (!!dom) {
        ReactDOM.unmountComponentAtNode(dom);
        dom.parentNode.removeChild(dom);
      }
      dom = document.createElement('div');
      dom.id = 'optionPanelWrap';
      this.select.appendChild(dom);
      count++;
      this.setState(prevState => ({
        closeStatus: false,
        count: count,
      }), () => {
        ReactDOM.render(<OptionPanel optionData={this.props.optionData}
          onSelect={this.selectSomeOne}
          closeStatus={this.state.closeStatus}
          placeholder={this.props.placeholder} />,
          dom)
      });
    }
    event.nativeEvent.stopImmediatePropagation();
  }
  selectSomeOne(selectedOption) {
    this.setState(prevState => ({
      selectedItem: selectedOption,
      closeStatus: true,
    }), () => {
      let dom = document.getElementById('optionPanelWrap');
      ReactDOM.render(<OptionPanel optionData={this.props.optionData}
        onSelect={this.selectSomeOne}
        closeStatus={this.state.closeStatus}
        placeholder={this.props.placeholder} />,
        dom)
    });
    this.props.onChange({ [this.props.name]: selectedOption });
  }
  componentWillReceiveProps(nextProps, props) {
    if (nextProps.optionData !== props.optionData) {
      const dfOption = this.props.defaultValue;
      console.log(typeof dfOption);
      if (typeof dfOption === 'number') {
        console.log(1757);
        nextProps.optionData.forEach((option) => {
          if (option.value === dfOption) {
            console.log(1758);
            option.active = true;
            this.setState(prevState => ({
              selectedItem: option,
            }));
          } else {
            option.active = false;
          }
        })
      } else if (Object.prototype.toString.call(dfOption) === "[object Object]" && dfOption.value) {
        nextProps.optionData.forEach((option) => {
          if (option.value === dfOption.value) {
            option.active = true;
            this.setState(prevState => ({
              selectedItem: dfOption,
            }));
          } else {
            option.active = false;
          }
        })
      } else {
        this.setState({
          selectedItem: { 'label': this.props.placeholder },
        })
      }
    }
    if (nextProps.defaultValue !== props.defaultValue) {
      const dfOption = nextProps.defaultValue;
      console.log(typeof dfOption);
      if (typeof dfOption === 'number') {
        console.log(1757);
        nextProps.optionData.forEach((option) => {
          if (option.value === dfOption) {
            console.log(1758);
            option.active = true;
            this.setState(prevState => ({
              selectedItem: option,
            }));
          } else {
            option.active = false;
          }
        })
      } else if (Object.prototype.toString.call(dfOption) === "[object Object]" && dfOption.value) {
        nextProps.optionData.forEach((option) => {
          if (option.value === dfOption.value) {
            option.active = true;
            this.setState(prevState => ({
              selectedItem: dfOption,
            }));
          } else {
            option.active = false;
          }
        })
      } else {
        this.setState({
          selectedItem: { 'label': this.props.placeholder },
        });
      }
    }
  }
  componentDidMount() {
    const dfOption = this.props.defaultValue;
    // console.log(this.refs);
    if (typeof dfOption === 'number') {
      this.props.optionData.forEach((option) => {
        if (option.value === dfOption) {
          option.active = true;
          this.setState(prevState => ({
            selectedItem: option,
          }));
        } else {
          option.active = false;
        }
      })
    } else if (Object.prototype.toString.call(dfOption) === "[object Object]" && dfOption.value) {
      this.props.optionData.forEach((option) => {
        if (option.value === dfOption.value) {
          option.active = true;
          this.setState(prevState => ({
            selectedItem: dfOption,
          }));
        } else {
          option.active = false;
        }
      })
    } else {
      this.setState({
        selectedItem: { 'label': this.props.placeholder },
      });
    }
    this.documentClickHandler = (e) => {
      this.setState({ closeStatus: true }, () => {
        let dom = document.getElementById('optionPanelWrap');
        if (dom) {
          ReactDOM.render(<OptionPanel optionData={this.props.optionData}
            onSelect={this.selectSomeOne}
            closeStatus={this.state.closeStatus}
            placeholder={this.props.placeholder} />,
            dom)
        }
      })
    }
    document.addEventListener('click', this.documentClickHandler)
  }
  componentWillUnmount() {
    document.removeEventListener('click', this.documentClickHandler)
  }
  render() {
    const iconClass = classNames({
      'select-arrow': true,
      'icon-dowico': true,
      'upico': !this.state.closeStatus,
    });
    const selectControlClass = classNames({
      'select-control': true,
      [`select-control-${this.props.size}`]: this.props.size,
    });
    return (
      <div className="select" id={this.props.name} ref={(select) => this.select = select}>
        <div className={selectControlClass} onClick={this.showOptionPanel} >
          {this.state.selectedItem.label}
          <span className={iconClass}></span>
        </div>
      </div>
    )
  }
}

Select.defaultProps = {
  placeholder: '请选择任意选项'
};

Select.propTypes = {
  optionData: PropTypes.array,
  onChange: PropTypes.func,
};

export default Select;
