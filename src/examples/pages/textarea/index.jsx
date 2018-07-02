import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import Button from '../../../components/Button/Button';
import Textarea from '../../../components/Textarea/Textarea';
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
            <Textarea />
          </div>
        </DemoWrap>
        <DemoWrap desc="带提示信息" code={code.placeholder}>
          <div>
            <Textarea placeholder="未输入时的提示信息"/>
          </div>
        </DemoWrap>
        <DemoWrap desc="带默认值" code={code.value}>
          <div>
            <Textarea value="value"/>
          </div>
        </DemoWrap>
        <DemoWrap desc="大小" code={code.size}>
          <div>
            <Textarea placeholder="size为small" size="small"/>
            <Textarea placeholder="size为base" size="base"/>
            <Textarea placeholder="size为large" size="large"/>
          </div>
        </DemoWrap>
        <DemoWrap desc="自定义宽高" code={code.width}>
          <div>
            <Textarea placeholder="自定义宽度为1000px" width="1000px"/>
            <Textarea placeholder="自定义高度为1000px"height="1000px"/>
          </div>
        </DemoWrap>
        <DemoWrap desc="字体大小" code={code.fontSize}>
          <div>
            <Textarea placeholder="自定义字体大小为20px" fontSize="20px"/>
          </div>
        </DemoWrap>
        <DemoWrap desc="最大输入字节" code={code.length}>
          <div>
            <Textarea placeholder="最多可输入30个字" maxLength={30}/>
          </div>
        </DemoWrap>
        <ReactMarkdown source={code.api} />
      </div>
    );
  }
}

export default Docs;
