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
import CheckboxPage from '../../pages/checkbox/index.jsx';
import FormDev from '../../components-examples/FormDev.js';
import InputDev from '../../components-examples/InputDev.js';
import InputPage from '../../pages/input/InputPage.jsx';
import ModalDev from '../../components-examples/ModalDev.js';
import ModalPage from '../../pages/modal/index.jsx';
import PaginationDev from '../../components-examples/PaginationDev.js';
import PaginationPage from '../../pages/pagination/index.jsx';
import RadioDev from '../../components-examples/RadioDev.js';
import RadioPage from '../../pages/radio/index.jsx';
import SelectDev from '../../components-examples/SelectDev.js';
import TextareaDev from '../../components-examples/TextareaDev.js';
import ToastDev from '../../components-examples/ToastDev.js';
import ToastPage from '../../pages/toast/index.jsx';
import TransferDev from '../../components-examples/TransferDev.js';
import TransferPage from '../../pages/transfer/TransferPage.jsx'
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
    switch (match.params.name)
    {
      case 'Intro':
        return (<ReactMarkdown source={ReadeMd} />)
      case 'Contribute':
        return (<ReactMarkdown source={ContributeMd} />)
      case 'Button':
        return <ButtonPage/>;
      case 'Input':
        return <InputPage/>;
      case 'Textarea':
        return <TextareaDev/>;
      case 'Radio':
        return <RadioPage/>;
      case 'Checkbox':
        return <CheckboxPage/>;
      case 'Toast':
        return <ToastPage/>;
      case 'Table':
        return <TableDev/>;
      case 'Select':
        return <SelectDev/>;
      case 'Modal':
        return <ModalPage/>;
      case 'Pagination':
        return <PaginationPage/>;
      case 'Transfer':
        return <TransferPage/>;
      case 'Cascader':
        return <Cascader/>;
      case 'CascaderSelector':
        return <CascaderSelectorPage/>;
    }
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
