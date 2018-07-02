import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import Button from '../../../components/Button/Button';
import { Radio, RadioGroup } from '../../../components/RadioGroup/RadioGroup';
import Icon from '../../../components/Icon/Icon';
import * as code from './docs.js';
import DemoWrap from '../../components/DemoWrap/DemoWrap';

class Docs extends Component {
  constructor(props) {
    super(props)
    this.state = {
      productType: 2,
    }
  }
  productTypeChange = (val) => {
    this.setState({
      productType: val.value
    })
  }
  render() {
    return (
      <div className="markdown">
        <ReactMarkdown source={code.desc} />
        <h2>代码示例</h2>
        <DemoWrap desc="基础用法" code={code.base}>
          <div>
            <Radio value={'5'} id="voiceTypezn1" textname="硬件设备" />
          </div>
        </DemoWrap>
        <DemoWrap desc="默认选中" code={code.checked}>
          <div>
            <Radio value={'6'} checked={true} id="voiceTypezn2" textname="硬件设备" />
          </div>
        </DemoWrap>
        <DemoWrap desc="禁用按钮" code={code.disabled}>
          <div>
            <Radio value={'7'} disabled id="voiceTypezn3" textname="硬件设备" />
          </div>
        </DemoWrap>
        <DemoWrap desc="按钮组" code={code.group}>
          <div>
            <RadioGroup
              value={this.state.productType}
              onChange={this.productTypeChange}
              name="device-type">
              <Radio value={1} id="productType1" textname="硬件设备"></Radio>
              <Radio value={2} id="productType2" textname="软件应用"></Radio>
            </RadioGroup>
          </div>
        </DemoWrap>
        <ReactMarkdown source={code.api} />
      </div>
    );
  }
}

export default Docs;
