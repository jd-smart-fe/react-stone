import React, { Component } from 'react';
import ReactDom from 'react-dom';
import classNames from 'classnames';
import Button from '../Button/Button';
import './modal.scss';

class Modal extends Component {
  cancel = () => {
    if (typeof this.props.onOk === 'object') {
      this.props.onCancel()
    } else {
      modal.close()
    }
  }
  modalOK = () => {
    if (typeof this.props.onOk === 'object') {
      this.props.onOk()
    } else {
      modal.close()
    }
  }
  render() {
    const modalSize = classNames({
      'modal': true,
      [`modal-${this.props.size}`]: this.props.size ? true : false
    })
    const { mask, closeable, footer, okText, cancelText, cancelBtn } = this.props;
    return (
      <div>
        { mask ?
          <div className="modal-mask"></div>
          : null
        }
        <div className="modal-wrap" role="dialog" tabIndex="-1">
          <div className={modalSize} role="document">
            <div className="modal-content">
              {closeable ? <div className="modal-close icon-close" onClick={this.cancel}></div> : null}
              {this.props.children}
              {footer ?
                <div className="modal-footer">
                  {cancelBtn ? <Button onClick={this.cancel} theme="gray">{cancelText}</Button> : null}
                  <Button onClick={this.modalOK}>{okText}</Button>
                </div> : null
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

class modal {
  static defaultOptions = {
    mask: true,
    closeable: true,
    footer: true,
    okText: '确定',
    cancelText: '取消',
    cancelBtn: true,
    size: 'sm',
    template: '',
    onCancel: '',
    onOk: ''
  }
  static open(options) {
    const modalOptions = Object.assign({}, this.defaultOptions, options);
    const modalDialog = document.createElement('div');
    modalDialog.id = "modal-dialog";
    let { template, ...attrOptions } = modalOptions;
    ReactDom.render(
      <Modal {...attrOptions}>{template}</Modal>,
      modalDialog
    )
    document.body.appendChild(modalDialog);
    return this;
  }
  static close() {
    const modalDialog = document.getElementById('modal-dialog');
    document.body.removeChild(modalDialog);
  }
}

export default modal;
