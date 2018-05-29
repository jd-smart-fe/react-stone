import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom';
import './sidebar.scss';

class Sidebar extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // 如果需要添加组件导航，请在该数组添加对应的导航名称。
    const componentsArr = [
      'Button',
      'Checkbox',
      'Cascader',
      'CascaderSelector',
      'Input',
      'Modal',
      'Pagination',
      'Radio',
      'Select',
      'Table',
      'Textarea',
      'Toast',
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
                  <NavLink
                    to={{
                      pathname: `/Intro`,
                    }}
                    activeStyle={{ color: '#3498db', backgroundColor: '#f5f7fa' }}
                  >项目说明</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to={{
                      pathname: `/Contribute`,
                    }}
                    activeStyle={{ color: '#3498db', backgroundColor: '#f5f7fa' }}
                  >贡献指南</NavLink>
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
                      <li className="nav-item" key={item}>
                        <NavLink exact
                          to={{
                            pathname: `/${item}`,
                          }}
                          activeStyle={{ color: '#3498db', backgroundColor: '#f5f7fa' }}
                        >{ item }</NavLink>
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

export default Sidebar;
