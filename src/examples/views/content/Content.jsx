import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
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
import CheckboxDev from '../../components-examples/CheckboxDev.js';
import FormDev from '../../components-examples/FormDev.js';
import InputDev from '../../components-examples/InputDev.js';
import ModalDev from '../../components-examples/ModalDev.js';
import PaginationDev from '../../components-examples/PaginationDev.js';
import RadioDev from '../../components-examples/RadioDev.js';
import SelectDev from '../../components-examples/SelectDev.js';
import TextareaDev from '../../components-examples/TextareaDev.js';
import ToastDev from '../../components-examples/ToastDev.js';
import TransferDev from '../../components-examples/TransferDev.js';
import './content.css';
const ReactMarkdown = require('react-markdown');
// const input = '# This is a header\n\nAnd this is a paragraph'

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  getCommponent = ({ match }) => {
    let CommponentType;
    switch (match.path)
    {
      case '/Button':
        CommponentType = ButtonDev;
        break;
      case '/Input':
        CommponentType = InputDev;
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
        CommponentType = TransferDev;
        break;
    }
    return <CommponentType />
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
        <Route path="/Transfer" component={this.getCommponent} />
      </div>
    )
  }
};

export default Content;
