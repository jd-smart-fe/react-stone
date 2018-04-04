import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '../../components/Button/Button.jsx';


class ButtonDev extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <Button>button调试区域</Button>
    );
  }
}

export default ButtonDev;
