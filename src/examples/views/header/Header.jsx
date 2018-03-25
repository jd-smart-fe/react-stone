import React, { Component } from 'react';
import './header.css';

class Header extends Component {
  render() {
    return (
      <header className="header-wrap">
        <div>
          react-stone
        </div>
        <div>
          <a href="https://github.com/jd-smart-fe/react-stone">github</a>
        </div>
      </header>
    );
  }
}

export default Header;
