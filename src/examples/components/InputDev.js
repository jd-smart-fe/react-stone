import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Input from '../../components/Input/Input.jsx';
import Icon from '../../components/Icon/Icon.jsx';

class App extends Component {
  render(){
    return (
      <div>
        <Input />
        <Input radius="radius"/>
        <Input value={ 123 }/>
        <Input type="password" />
        <Input disabled={true} placeholder="不可输入" />
        <Input placeholder="placeholder" />
        <Input size="small" />
        <Input size="base" />
        <Input size="large" />
        <Input maxLength={5} />
        <Input addonBefore="http://" addonAfter=".com" />
        <Input addonBefore="搜索框" addonAfter={<Icon type='search' />} />
      </div>
    )
  }
}

export default App;
