import React, { Component } from 'react';
import classNames from 'classnames';
import Button from '../../../components/Button/Button';
import Icon from '../../../components/Icon/Icon';
import './demo-wrap.scss';
const ReactMarkdown = require('react-markdown');

class DemoWrap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      closeStatus: true
    }
  }
  handleClick = () => {
    this.setState((prevState) => {
      return {
        closeStatus: !prevState.closeStatus
      };
    })
  }
  render() {
    const iconClass = classNames({
      'select-arrow': true,
      'icon-dowico': this.state.closeStatus,
      'icon-upico': !this.state.closeStatus,
    });
    return (
      <div className="rsdoc-react-demo">
        <div className="rsdoc-react-demo__preview">
          <div>
            {this.props.children}
          </div>
        </div>
        <div className="rsdoc-react-demo__bottom" onClick={this.handleClick}>
          <div className="rsdoc-react-demo__title">
            <div>{this.props.desc}</div>
          </div>
          <span className={iconClass}></span>
        </div>
        {!this.state.closeStatus ?
          <div className="rsdoc-react-demo__code">
            <ReactMarkdown source={this.props.code} />
          </div> : null
        }
      </div>
    );
  }
}

export default DemoWrap;
