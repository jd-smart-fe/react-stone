import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Radio, RadioGroup } from '../../components/RadioGroup/RadioGroup.jsx';


class ButtonDev extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productType: 1,
    };
  }
  productTypeChange = (val) => {
    this.setState({
      productType: val.value
    })
  }
  render() {
    return (
      <div>
        <Radio value={'5'} checked={true} id="voiceTypezn" textname="硬件设备" />
        <RadioGroup name="device-type" selectedValue={this.state.productType} onChange={this.productTypeChange}>
          <Radio value={1} id="productType1" textname="硬件设备"></Radio>
          <Radio value={2} id="productType2" textname="软件应用"></Radio>
        </RadioGroup>
      </div>
    );
  }
}

export default ButtonDev;
