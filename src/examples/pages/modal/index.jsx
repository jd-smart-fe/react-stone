import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import Button from '../../../components/Button/Button';
import Modal from '../../../components/Modal/modal';
import Icon from '../../../components/Icon/Icon';
import * as code from './docs.js';
import DemoWrap from '../../components/DemoWrap/DemoWrap';

class ButtonPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isShowModal: false,
    }
  }
  openModal = () => {
    const myModal = Modal.open({
      "size": 'sm',
      "title": '提示',
      "template": this.getContentComponent(),
      "onCancel": this.closeModal,
      "onOk": this.okModal
    });
  }
  getContentComponent = () => {
    return (
      <p>如果没有保存，数据将会丢失，确认取消吗？</p>
    )
  }
  handleModalVisible = () => {
    this.setState({
      isShowModal: true
    })
  }
  render() {
    return (
      <div className="markdown">
        <ReactMarkdown source={code.desc} />
        <h2>代码示例</h2>
        <DemoWrap desc="基础用法" code={code.base}>
          <Button onClick={this.openModal}>Open modal by JavaScript</Button>
        </DemoWrap>
        <DemoWrap desc="模板写法" code={code.template}>
          <Modal
            title='提示'
            visible={this.state.isShowModal}>
            Hello Modal
          </Modal>
          <Button onClick={this.handleModalVisible}>Open modal by templeate</Button>
        </DemoWrap>
        <ReactMarkdown source={code.api} />
      </div>
    );
  }
}

export default ButtonPage;
