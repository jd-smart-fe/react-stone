import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import './sidebar.css';

class SlideBar extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const componentsArr = ['Button', 'Input', 'Textarea', 'Radio', 'Checkbox', 'Toast', 'Select', 'Modal', 'Pagination', 'Transfer'];
    return (
      <aside className="aside-wrap">
        {
          componentsArr.map((item, index) => {
            return (
              <div key={index}>
                <Link to={{
                  pathname: `/${item}`,
                  state: { fromDashboard: true }
                }}>{ item }</Link>
              </div>
            )
          })
        }
      </aside>
    )
  }
};

export default SlideBar;
