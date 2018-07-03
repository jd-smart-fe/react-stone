import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Select from '../../components/Select/Select.jsx';
import Icon from '../../components/Icon/Icon.jsx';

const saleVolumes1 = [
  {
    label: '<1000',
    value: 1
  },
  {
    label: '1001~10000',
    value: 2
  },
  {
    label: '10001~100000',
    value: 3
  },
  {
    label: '100001~1000000',
    value: 4
  },
  {
    label: '>1000000',
    value: 5
  }
];

const saleVolumes2 = [
  {
    label: '<1000',
    value: 1
  },
  {
    label: '1001~10000',
    value: 2
  },
  {
    label: '10001~100000',
    value: 3
  },
  {
    label: '100001~1000000',
    value: 4
  },
  {
    label: '>1000000',
    value: 5
  }
];
const selectChange1 = (params) => {
  console.log(params);
}
const selectChange2 = (params) => {
  console.log(params);
}
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentPage: 5
    }
  }
  render(){
    return (
      <div>
        <Select
          size="large"
          placeholder="请选择123"
          optionData={saleVolumes1}
          onChange={selectChange1}/>
        <Select
          size="small"
          placeholder="请选择123"
          optionData={saleVolumes2}
          onChange={selectChange2}/>
        {/* <Select
          size="large"
          defaultValue={3}
          optionData={saleVolumes}
          onChange={selectChange}/> */}
      </div>
    )
  }
}

export default App;
