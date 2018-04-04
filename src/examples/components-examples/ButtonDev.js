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
      <div>
        <Button>Button Base</Button>
        <Button theme='gray'>Button theme gray</Button>
        <Button size='small'>Button small</Button>
        <Button size='base'>Button base</Button>
        <Button size='large'>Button large</Button>
        <Button disabled={true}>Button Disabled</Button>
        <Button radius='circle' icon="delete" />
        <Button icon="delete">delect</Button>
        <Button htmlType='submit'>Button Submit</Button>
      </div>
    );
  }
}

export default ButtonDev;
