import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Cascader from '../../components/Cascader/Cascader.jsx';
import Icon from '../../components/Icon/Icon.jsx';

const options = [{
  value: 'zhejiang',
  label: 'Zhejiang',
  children: [{
    value: 'hangzhou',
    label: 'Hangzhou',
    children: [{
      value: 'xihu',
      label: 'West Lake',
    }],
  }],
}, {
  value: 'jiangsu',
  label: 'Jiangsu',
  children: [{
    value: 'nanjing',
    label: 'Nanjing',
    children: [{
      value: 'zhonghuamen',
      label: 'Zhong Hua Men',
    }],
  }],
}];

class App extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <div>
      <Cascader optionData={options}/>
      </div>
    )
  }
}

export default App;
