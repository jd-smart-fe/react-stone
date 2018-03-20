import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import './content.css';

class Content extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="content-wrap">
        <Route path="/Input" component={123} />
      </div>
    )
  }
};

export default Content;
