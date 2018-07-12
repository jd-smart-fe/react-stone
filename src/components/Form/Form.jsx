import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import noop from 'lodash/noop';

class Form extends Component {
  static propTypes = {
    onSubmit: PropTypes.func,
    children: PropTypes.any,
    disableEnterSubmit: PropTypes.bool,
  };

  static defaultProps = {
    onSubmit: noop,
    disableEnterSubmit: true,
  };

  onKeyDown = event => {
    console.log(123);
    console.log(this.props);
    // 默认禁止输入框回车触发表单提交事件
    const isFromInput = event.target.tagName === 'INPUT';
    if (isFromInput && this.props.disableEnterSubmit && event.keyCode === 13) {
      event.preventDefault();
    }
  };
  render() {
    const {
      onSubmit,
      onChange
    } = this.props;
    return (
      <form
        onSubmit={onSubmit}
        onKeyDown={this.onKeyDown}
      >
        {this.props.children}
      </form>
    );
  }
}

export default Form;
