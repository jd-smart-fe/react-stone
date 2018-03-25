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
  handleClick(option, event) {
    event.preventDefault();
    this.props.onSelect(option);
    this.props.optionData.map((item) => {
      if (item.value === option.value) {
        item.active = true;
      } else {
        item.active = false;
      }
      return item;
    });
  }
  render() {
    const optionArr = [];
    this.props.optionData.forEach((option) => {
      const itemClass = classNames({
        'option-item': true,
        active: option.active,
      });
      optionArr.push(<li className={itemClass} key={option.value} value={option.value} onClick={this.handleClick.bind(this, option)}>{option.label}</li>);
    });
    const optionPanelClass = classNames({
      'option-panel': true,
      'option-panel-show': !this.props.closeStatus,
    });
    return (
      <div className={optionPanelClass}>
        <ul className="option-panel-content">
          {optionArr}
        </ul>
      </div>
    );
  }
}

OptionPanel.propTypes = {
  optionData: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired,
  closeStatus: PropTypes.bool.isRequired,
};

class Select extends Component {
  constructor(props) {
    super(props);
    this.state = {
      closeStatus: true,
      selectedItem: '',
      count: 0,
    };
  }
  showOptionPanel = (event) => {
    let { count } = this.state;
    let dom = document.getElementById('optionPanelWrap');
    if (count !== 0) {
      if (dom && dom.parentNode.id !== this.props.name) {
        ReactDOM.unmountComponentAtNode(dom);
        dom.parentNode.removeChild(dom);
        dom = document.createElement('div');
        dom.id = 'optionPanelWrap';
        this.select.appendChild(dom);
        count += 1;
        this.setState(prevState => ({
          closeStatus: false,
          count,
        }), () => {
          ReactDOM.render(
          <OptionPanel optionData={this.props.optionData}
            onSelect={this.selectSomeOne}
            closeStatus={this.state.closeStatus}
            placeholder={this.props.placeholder} />,
          dom,
          );
        });
      } else {
        this.setState(prevState => ({
          closeStatus: !prevState.closeStatus,
          count: 0,
        }), () => {
          ReactDOM.render(
          <OptionPanel optionData={this.props.optionData}
            onSelect={this.selectSomeOne}
            closeStatus={this.state.closeStatus}
            placeholder={this.props.placeholder} />,
          dom,
          );
        });
      }
    } else {
      if (dom) {
        ReactDOM.unmountComponentAtNode(dom);
        dom.parentNode.removeChild(dom);
      }
      dom = document.createElement('div');
      dom.id = 'optionPanelWrap';
      this.select.appendChild(dom);
      count += 1;
      this.setState(prevState => ({
        closeStatus: false,
        count,
      }), () => {
        ReactDOM.render(
        <OptionPanel optionData={this.props.optionData}
          onSelect={this.selectSomeOne}
          closeStatus={this.state.closeStatus}
          placeholder={this.props.placeholder} />,
        dom,
        );
      });
    }
    event.nativeEvent.stopImmediatePropagation();
  }
  selectSomeOne = (selectedOption) => {
    this.setState(prevState => ({
      selectedItem: selectedOption,
      closeStatus: true,
    }), () => {
      let dom = document.getElementById('optionPanelWrap');
      ReactDOM.render(
        <OptionPanel optionData={this.props.optionData}
          onSelect={this.selectSomeOne}
          closeStatus={this.state.closeStatus}
          placeholder={this.props.placeholder} />,
        dom,
      );
    });
    let params;
    if (this.props.name) {
      params = {
        [this.props.name]: selectedOption,
      };
    } else {
      params = selectedOption;
    }
    this.props.onChange(params);
  }
  getSelectedItem = (defaultValue, props) => {
    const dfOption = defaultValue;
    if (typeof dfOption === 'number') {
      props.optionData.forEach((option) => {
        if (option.value === dfOption) {
          option.active = true;
          this.setState(prevState => ({
            selectedItem: option,
          }));
        } else {
          option.active = false;
        }
      });
    } else if (Object.prototype.toString.call(dfOption) === '[object Object]' && dfOption.value) {
      props.optionData.forEach((option) => {
        if (option.value === dfOption.value) {
          option.active = true;
          this.setState(prevState => ({
            selectedItem: dfOption,
          }));
        } else {
          option.active = false;
        }
      });
    } else {
      this.setState({
        selectedItem: { label: this.props.placeholder },
      });
    }
  }
  componentWillReceiveProps(nextProps) {
    if ((nextProps.optionData !== this.props.optionData) || (nextProps.defaultValue !== this.props.defaultValue)) {
      this.getSelectedItem(nextProps.defaultValue, nextProps);
    }
  }
  componentDidMount() {
    this.getSelectedItem(this.props.defaultValue, this.props);
    this.documentClickHandler = (e) => {
      this.setState({ closeStatus: true }, () => {
        let dom = document.getElementById('optionPanelWrap');
        if (dom) {
          ReactDOM.render(
          <OptionPanel optionData={this.props.optionData}
            onSelect={this.selectSomeOne}
            closeStatus={this.state.closeStatus}
            placeholder={this.props.placeholder} />,
          dom,
          );
        }
      });
    };
    document.addEventListener('click', this.documentClickHandler);
  }
  componentWillUnmount() {
    document.removeEventListener('click', this.documentClickHandler);
  }
  render() {
    const iconClass = classNames({
      'select-arrow': true,
      'icon-dowico': true,
      upico: !this.state.closeStatus,
    });
    const selectControlClass = classNames({
      'select-control': true,
      [`select-control-${this.props.size}`]: this.props.size,
    });
    return (
      <div className="select" id={this.props.name} ref={(select) => { this.select = select; }}>
        <div className={selectControlClass} onClick={this.showOptionPanel} >
          {this.state.selectedItem.label}
          <span className={iconClass}></span>
        </div>
      </div>
    );
  }
}

Select.defaultProps = {
  placeholder: '请选择任意选项',
};

Select.propTypes = {
  optionData: PropTypes.array,
  size: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  defaultValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object,
  ]),
  onChange: PropTypes.func,
};

export default Select;
