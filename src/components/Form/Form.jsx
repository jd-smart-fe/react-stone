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

  render() {
    const {
      onSubmit,
      onChange
    } = this.props;
    return (
      <form
        onSubmit={onSubmit}
      >
        {this.props.children}
      </form>
    );
  }
}

export default Form;
