import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Header from './views/header/Header.jsx';
import Sidebar from './views/sidebar/Sidebar.jsx';
import Content from './views/content/Content.jsx';
import iconfonts from '../components/Fonts/icofonts.css';

import '../style/normalize.css';
import './app.scss';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <div style={{
            display: 'flex'
          }}>
            <Sidebar />
            <Content />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
