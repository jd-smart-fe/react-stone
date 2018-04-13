import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import ReadeMd from '../../../../README.md';
import ContributeMd from '../../../../docs/contribute.md';
// import ButtonMd from '../../../components/Button/readme.md';
// import CheckboxGroupMd from '../../../components/CheckboxGroup/readme.md';
// import InputMd from '../../../components/Input/readme.md';
// import ModalMd from '../../../components/Modal/readme.md';
// import PaginationMd from '../../../components/Pagination/readme.md';
// import RadioGroupMd from '../../../components/RadioGroup/readme.md';
// import SelectMd from '../../../components/Select/readme.md';
// import TextareaMd from '../../../components/Textarea/readme.md';
// import ToastMd from '../../../components/Toast/readme.md';

import ButtonDev from '../../components-examples/ButtonDev.js';
import ButtonPage from '../../pages/button/ButtonPage.jsx';
import CheckboxDev from '../../components-examples/CheckboxDev.js';
import FormDev from '../../components-examples/FormDev.js';
import InputDev from '../../components-examples/InputDev.js';
import InputPage from '../../pages/input/InputPage.jsx';
import ModalDev from '../../components-examples/ModalDev.js';
import PaginationDev from '../../components-examples/PaginationDev.js';
import RadioDev from '../../components-examples/RadioDev.js';
import SelectDev from '../../components-examples/SelectDev.js';
import TextareaDev from '../../components-examples/TextareaDev.js';
import ToastDev from '../../components-examples/ToastDev.js';
import TransferDev from '../../components-examples/TransferDev.js';
import TransferPage from '../../pages/transfer/TransferPage.jsx'
import Cascader from '../../components-examples/Cascader.js';
import './content.scss';

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  getCommponent = ({ match }) => {
    let CommponentType;
    switch (match.path)
    {
      case '/Intro':
        CommponentType = ReadeMd;
        return (<ReactMarkdown source={CommponentType} />)
      case '/Contribute':
        CommponentType = ContributeMd;
        return (<ReactMarkdown source={CommponentType} />)
      case '/Button':
        CommponentType = ButtonPage;
        break;
      case '/Input':
        CommponentType = InputPage;
        break;
      case '/Textarea':
        CommponentType = TextareaDev;
        break;
      case '/Radio':
        CommponentType = RadioDev;
        break;
      case '/Checkbox':
        CommponentType = CheckboxDev;
        break;
      case '/Toast':
        CommponentType = ToastDev;
        break;
      case '/Select':
        CommponentType = SelectDev;
        break;
      case '/Modal':
        CommponentType = ModalDev;
        break;
      case '/Pagination':
        CommponentType = PaginationDev;
        break;
      case '/Transfer':
        CommponentType = TransferPage;
        break;
      case '/Cascader':
        CommponentType = Cascader;
        break;
    }
    return <CommponentType />
  }
  render() {
    return (
      <div className="content-wrap markdown-body" id="content">
        <Route path="/Intro" component={this.getCommponent} />
        <Route path="/Contribute" component={this.getCommponent} />
        <Route path="/Button" component={this.getCommponent} />
        <Route path="/Input" component={this.getCommponent} />
        <Route path="/Textarea" component={this.getCommponent} />
        <Route path="/Radio" component={this.getCommponent} />
        <Route path="/Checkbox" component={this.getCommponent} />
        <Route path="/Toast" component={this.getCommponent} />
        <Route path="/Select" component={this.getCommponent} />
        <Route path="/Modal" component={this.getCommponent} />
        <Route path="/Pagination" component={this.getCommponent} />
        <Route path="/Transfer" component={this.getCommponent} />
        <Route path="/Cascader" component={this.getCommponent} />
      </div>
    )
  }
};

export default Content;
