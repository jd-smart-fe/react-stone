import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './textarea.scss';

class Textarea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
    };
    this.handleChange = this.handleChange.bind(this);
  }
  componentWillReceiveProps(nextProps, props) {
    if (nextProps.value !== props.value) {
      this.setState({
        value: nextProps.value,
      });
    }
  }
  handleChange(e) {
    const { name, value } = e.target;
    if (name) {
      this.setState({
        [name]: value,
        value,
      }, () => {
        this.props.onText({ [name]: value });
      });
    } else {
      this.setState({
        value,
      }, () => {
        this.props.onText(value);
      });
    }
  }
  render() {
    const {
      name, maxLength, width, height, size, fontSize, placeholder,
    } = this.props;
    const textareaClass = classNames({
      'textarea-base': true,
      [`textarea-size-${size}`]: size,
    });
    return (
      <div
        className={textareaClass}
        style={{
          width,
          height,
          fontSize,
        }}>
        <textarea
          className="textarea-inner"
          name={ name }
          value={ this.state.value }
          maxLength={ maxLength }
          placeholder={ placeholder }
          onChange={ this.handleChange }>
        </textarea>
         { maxLength ?
          <div className="cha-limit">{ this.state.value.length }/<span className="max-cha-num">{ maxLength }</span></div>
          : null}
      </div>
    );
  }
}

Textarea.defaultProps = {
  size: 'base',
  value: '',
  onText: () => {},
};

Textarea.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  size: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  fontSize: PropTypes.string,
  maxLength: PropTypes.number,
  name: PropTypes.string,
  onText: PropTypes.func,
};

export default Textarea;
