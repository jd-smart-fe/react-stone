import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CheckboxGroup from '../../components/CheckboxGroup/CheckboxGroup.jsx';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      options: [
        { label: 'Apple', value: 'Apple' },
        { label: 'Pear', value: 'Pear' },
        { label: 'Orange', value: 'Orange' },
      ],
      checkedBox: [
        'Pear'
      ]
    }
  }
  checkedBoxChange = (checkedList, targetValue) => {
    console.log(checkedList);
    console.log(targetValue);
  }
  render(){
    return (
      <CheckboxGroup
        options={this.state.options}
        onChange={this.checkedBoxChange}
        defaultValue={['Apple']}
        value={this.state.checkedBox}/>
    )
  }
}

export default App;
