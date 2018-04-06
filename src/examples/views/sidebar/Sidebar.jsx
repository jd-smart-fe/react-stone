import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import './sidebar.scss';

class SlideBar extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // 如果需要添加组件导航，请在该数组添加对应的导航名称。
    const componentsArr = [
      'Button',
      'Input',
      'Textarea',
      'Radio',
      'Checkbox',
      'Toast',
      'Select',
      'Modal',
      'Pagination',
      'Transfer'
    ];
    return (
      <aside className="side-nav">
        <ul>
          <li className="nav-group-item">
            <a>开发指南</a>
            <div className="nav-group">
              <div className="nav-group__title">使用</div>
              <ul className="pure-menu-list">
                <li className="nav-item">
                  <Link to={{
                    pathname: `/Intro`,
                  }}>项目说明</Link>
                </li>
                <li className="nav-item">
                  <Link to={{
                      pathname: `/Contribute`,
                    }}>贡献指南</Link>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-group-item">
            <a>组件</a>
            <div className="nav-group">
              <ul className="pure-menu-list">
                {
                  componentsArr.map((item, index) => {
                    return (
                      <li className="nav-item" key={index}>
                        <Link to={{
                          pathname: `/${item}`,
                        }}>{ item }</Link>
                      </li>
                    )
                  })
                }
              </ul>
            </div>
          </li>
        </ul>
      </aside>
    )
  }
};

export default SlideBar;
