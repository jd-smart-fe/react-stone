import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import ButtonMd from '../../../components/Button/readme.md';
import CheckboxGroupMd from '../../../components/CheckboxGroup/readme.md';
import InputMd from '../../../components/Input/readme.md';
import ModalMd from '../../../components/Modal/readme.md';
import PaginationMd from '../../../components/Pagination/readme.md';
import RadioGroupMd from '../../../components/RadioGroup/readme.md';
import SelectMd from '../../../components/Select/readme.md';
import TextareaMd from '../../../components/Textarea/readme.md';
import ToastMd from '../../../components/Toast/readme.md';
import './content.css';
const ReactMarkdown = require('react-markdown');
// const input = '# This is a header\n\nAnd this is a paragraph'

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
  }
  getContentComponent = () => {
    return (
      <div>
        <div className="modal-header">
            <span>提示</span>
        </div>
        <div className="modal-body">
            <p>如果没有保存，数据将会丢失，确认取消吗？</p>
        </div>
    </div>
    )
  }
  openModal = () => {
    const myModal = modal.open({
      "size": 'sm',
      "template": this.getContentComponent(),
      "onCancel": this.closeModal,
      "onOk": this.okModal
    });
    // 该组件提供代码关闭弹框的手段，调用close方法即可！
    // setTimeout(() => {
    //   myModal.close()
    // }, 2000);
  }
  getCommponent = ({ match }) => {
    console.log(match.path);
    let commponentType;
    console.log(match.path)
    switch (match.path)
    {
      case '/Button':
        commponentType = ButtonMd;
        break;
      case '/Input':
        commponentType = InputMd;
        break;
      case '/Textarea':
        commponentType = TextareaMd;
        break;
      case '/Radio':
        commponentType = RadioGroupMd;
        break;
      case '/Checkbox':
        commponentType = CheckboxGroupMd;
        break;
      case '/Toast':
        commponentType = ToastMd;
        break;
      case '/Select':
        commponentType = SelectMd;
        break;
      case '/Modal':
        commponentType = ModalMd;
        break;
      case '/Pagination':
        commponentType = PaginationMd;
        break;
    }
    console.log(commponentType)
    return (<ReactMarkdown source={commponentType} />)
  }
  render() {
    return (
      <div className="content-wrap" id="content">
        <Route path="/Button" component={this.getCommponent} />
        <Route path="/Input" component={this.getCommponent} />
        <Route path="/Textarea" component={this.getCommponent} />
        <Route path="/Radio" component={this.getCommponent} />
        <Route path="/Checkbox" component={this.getCommponent} />
        <Route path="/Toast" component={this.getCommponent} />
        <Route path="/Select" component={this.getCommponent} />
        <Route path="/Modal" component={this.getCommponent} />
        <Route path="/Pagination" component={this.getCommponent} />
      </div>
    )
  }
};

export default Content;
