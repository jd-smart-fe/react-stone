const desc = `
  # Modal
  模态对话框。
`;

const base = `
  \`\`\`jsx
  import React, { Component } from 'react';
  import ReactDOM from 'react-dom';
  import { Modal } from 'react-stone';

  class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
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
    }
    getContentComponent = () => {
      return (
        <p>如果没有保存，数据将会丢失，确认取消吗？</p>
      )
    }
    render(){
      return (
        <div>
          <Button onClick={this.openModal}>Open modal by JavaScript</Button>
        </div>
      )
    }
  }

  ReactDOM.render(<App />, document.getElementById('root'));
  \`\`\`
`;

const template = `
  \`\`\`jsx
  import React, { Component } from 'react';
  import ReactDOM from 'react-dom';
  import { Modal } from 'react-stone';

  class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isShowModal: false,
      };
    }
    handleModalVisible = () => {
      this.setState({
        isShowModal: true
      })
    }
    render(){
      return (
        <div>
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

  ReactDOM.render(<App />, document.getElementById('root'));
  \`\`\`
`;

const api = `
  ## 组件方法
  方法名   |    参数     |     说明
  ----    |  ----    | ----    |
  open | 接受一个对象，包含所有的参数 | 目前调用modal组件的唯一方法，调用后会返回这个组件本身，可用于后期手动移除！
  close | 无需传递参数 | 关闭modal组件


  ## Options
  属性名   |    类型   |     默认值     |     说明
  ----    | ----    | ----    | ----    |
  mask  | Boolean  | true |  是否需要蒙层
  closeable  | Boolean  | true  |  是否展示右上角关闭按钮
  footer | Boolean | true | 是否展示底部按钮（确认、取消）
  cancelBtn | Boolean | true | 是否显示取消按钮
  okText | String | '确定' | 定义确定按钮文字
  cancelText | String | '取消' | 定义取消按钮文字
  template | JSX | 无默认值 | Component 模态框内部内容（只在代码调用时生效）
  title | String或Reactnode | 无 | 定义弹框标题
  size | String | 'sm' | 'sm','','lg'或false  模态框的大小 默认'sm'  'sm' {width:'400px',height:'300px'}， size 为空或false时 大小为{width:'600px',height:'400px'}  'lg' {width:'900px',height:'600px'}

  ## Events
  方法名称   |    说明    |    参数    |
  ----    | ----      | ----        |
  onCancel  | 传入模态框的回调函数，关闭时触发 | 待确认
  onOk  | 传入模态框的回调函数，点击确认时触发 | 待确认
`;

export {
  desc,
  base,
  template,
  api,
};
