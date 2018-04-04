import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Modal from '../../components/Modal/modal.jsx';
import Button from '../../components/Button/Button.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowModal: false,
    };
  }
  openModal = () => {
    const myModal = Modal.open({
      "size": 'sm',
      "title": '提示',
      "template": this.getContentComponent(),
      "onCancel": this.closeModal,
      "onOk": this.okModal
    });
    // 该组件提供代码关闭弹框的手段，调用close方法即可！
    // setTimeout(() => {
    //   myModal.close()
    // }, 2000);
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
  render(){
    return (
      <div>
        <Button onClick={this.openModal}>Open modal by JavaScript</Button>
        <Modal
          title='提示'
          visible={this.state.isShowModal}>
          Hello Modal
        </Modal>
        <Button onClick={this.handleModalVisible}>Open modal by templeate</Button>
      </div>
    )
  }
}


export default App;
