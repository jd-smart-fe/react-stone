import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Textarea from '../../components/Textarea/Textarea.jsx';

class App extends Component {
  render() {
    return (
      <div>
        <Textarea />
        <Textarea placeholder="未输入时的提示信息"/>
        <Textarea value="value"/>
        <Textarea size="small"/>
        <Textarea size="base"/>
        <Textarea size="large"/>
        <Textarea width="1000px"/>
        <Textarea height="1000px"/>
        <Textarea fontSize="20px"/>
        <Textarea maxLength={30}/>
      </div>
    )
  }
}

export default App;
