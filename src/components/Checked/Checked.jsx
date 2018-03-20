import React, { Component } from 'react';
import './checked.scss';
let classNames = require('classnames');

class Checked extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount(){
    const {type,checked,id}=this.props;
    if(type==='checkbox'){
        this.setState({
          'isChecked':checked,
          'value':id
        },()=>{
          this.props.checkChange(this.state);
        })
      }
    }
  isChecked = (event) =>{
    const name=event.target.name;
    const id=event.target.id;
    const trueValue=event.target.value;
    const checked=event.target.checked;
    if(this.props.type==="checkbox"){
      this.setState({
        'isChecked':checked,
        'value':trueValue
      },()=>{
        this.props.checkChange(this.state);
      })
    }else if(this.props.type==='radio'){
      this.setState({
        value:event.target.checked,
        [name]:trueValue
      }, () => {
        this.props.checkChange(this.state);
      })
    }
  }

  render(){
    const {type,name,trueValue,id,checked}=this.props;
    var classArr = classNames({
      'magic':true,
      [` magic-checkbox`]: this.props.type === 'checkbox',
      [` magic-radio`]: this.props.type === 'radio',
   })
    return(
      <span>
        <input type={type} name={name} className={classArr} checked={this.props.checked} value={trueValue} id={id} onChange={this.isChecked} onClick={this.props.onClick}/>
        <label htmlFor={this.props.id}>{this.props.textName}</label>
      </span>

    );
  }
}
export default Checked;