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
          <a href="https://www.github.com">github</a>
        </div>
      </header>
    );
  }
}

export default Header;
