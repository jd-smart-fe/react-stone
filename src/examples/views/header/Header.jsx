import React, { Component } from 'react';
import './header.scss';

class Header extends Component {
  render() {
    return (
      <header className="page-header__wrap">
        <div className="page-header__logo">
          <img src="https://raw.githubusercontent.com/github/explore/6c6508f34230f0ac0d49e847a326429eefbfc030/topics/react/react.png" className='react-logo'/>
          React Stone
        </div>
        <div className="page-header__nav">
          <a href="https://github.com/jd-smart-fe/react-stone" className='github-logo'></a>
        </div>
      </header>
    );
  }
}

export default Header;
