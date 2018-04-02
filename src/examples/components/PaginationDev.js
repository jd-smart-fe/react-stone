import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Pagination from '../../components/Pagination/Pagination.jsx';

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
        <Pagination total={100} pageSize={10} current={this.state.currentPage} onChange={this.pageChange}></Pagination>
      </div>
    )
  }
  pageChange = (page) => {
    this.setState({
      currentPage: page
    })
  }
}

export default App;
