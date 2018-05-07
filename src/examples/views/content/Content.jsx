import React, { Component } from 'react';
import { Route } from 'react-router-dom';
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
// import TransferDev from '../../components-examples/TransferDev.js';
// import TransferPage from '../../pages/transfer/TransferPage.jsx'
import Cascader from '../../components-examples/Cascader.js';
import CascaderSelectorPage from '../../pages/cascaderSelector/CascaderSelectorPage.jsx';
import TableDev from '../../components/TableDev.js';
import './content.scss';
// const input = '# This is a header\n\nAnd this is a paragraph'

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  getCommponent = ({ match }) => {
    let CommponentType;
    switch (match.params.name)
    {
      case 'Intro':
        CommponentType = ReadeMd;
        return (<ReactMarkdown source={CommponentType} />)
      case 'Contribute':
        CommponentType = ContributeMd;
        return (<ReactMarkdown source={CommponentType} />)
      case 'Button':
        CommponentType = ButtonPage;
        break;
      case 'Input':
        CommponentType = InputPage;
        break;
      case 'Textarea':
        CommponentType = TextareaDev;
        break;
      case 'Radio':
        CommponentType = RadioDev;
        break;
      case 'Checkbox':
        CommponentType = CheckboxDev;
        break;
      case 'Toast':
        CommponentType = ToastDev;
        break;
      case 'Select':
        CommponentType = SelectDev;
        break;
      case 'Modal':
        CommponentType = ModalDev;
        break;
      case 'Pagination':
        CommponentType = PaginationDev;
        break;
      // case 'Transfer':
      //   CommponentType = TransferPage;
      //   break;
      case 'Cascader':
        CommponentType = Cascader;
        break;
      case 'CascaderSelector':
        CommponentType = CascaderSelectorPage;
      case 'Table':
        CommponentType = TableDev;
        break;
    }
    return <CommponentType />
  }
  render() {
    return (
      <div className="content-wrap markdown-body" id="content">
        <Route path="/:name" render = { this.getCommponent } />
      </div>
    )
  }
};

export default Content;
