import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import './content.css';
import Input from '../../../components/Input/Input';
// var Button = require('../../../components/Button/readme.md');

// console.log(import '../../../components/Button/readme.md');
class Content extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="content-wrap">
        {/* <ReactMarkdown source={Button} /> */}
        <Route path="/Input" component={Input} />
      </div>
    )
  }
};

export default Content;
