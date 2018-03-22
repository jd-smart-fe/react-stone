import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import './toast.scss';
import '../Fonts/icofonts.css';

class NoticeDom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    if (this.props.duration > 0) {
      this.closeTimer = setTimeout(() => {
        this.close();
      }, this.props.duration - 300);
    }
  }
  componentWillUnmount() {
    // 当有意外关闭的时候 清掉定时器
    this.clearCloseTimer();
  }
  clearCloseTimer() {
    if (this.closeTimer) {
      clearTimeout(this.closeTimer);
      this.closeTimer = null;
    }
  }
  close() {
    // 关闭的时候 应该先清掉倒数定时器
    // 然后开启过场动画
    // 等待动画结束 执行回调
    this.clearCloseTimer();
    const _this = this;
    this.timer = setTimeout(() => {
      if (this.props.onClose) {
        this.props.onClose(this.props.id);
      }
      clearTimeout(_this.timer);
    }, 300);
  }
  render() {
    const noticeCls = classNames({
      'toast-box': true,
      [`icon-${this.props.type}`]: this.props.type,
      [`toast-${this.props.type}`]: this.props.type,
    });
    return (
      <div className={noticeCls} id={this.props.id}>{this.props.text}</div>
    );
  }
}
class Notice {
  static notices = [];
  static defaultOptions = {
    text: '',
    type: 'info',
    timeout: 2000,
  };
  static add(text, type, timeout) {
    const toastText = text || this.defaultOptions.text;
    const toastType = type || this.defaultOptions.type;
    const duration = timeout || this.defaultOptions.timeout;
    const toastId = new Date().getTime();
    const onClose = this.remove;
    let ToastDiv;
    ToastDiv = document.getElementById('toast-root');
    if (!ToastDiv) {
      ToastDiv = document.createElement('div');
      ToastDiv.id = 'toast-root';
      ToastDiv.classList.add('toast-root');
      document.body.appendChild(ToastDiv);
    }
    Notice.notices.push({
      text: toastText, type: toastType, duration, id: toastId, onClose,
    });
    const NoticesDom = Notice.notices.map(notice => <NoticeDom key={notice.id} {...notice} />);
    ReactDOM.render(NoticesDom, ToastDiv);
  }
  static remove(id) {
    Notice.notices = Notice.notices.filter(item => item.id !== id);
    const NoticesDom = Notice.notices.map(notice => <NoticeDom key={notice.id} {...notice} />);
    let ToastDiv = document.getElementById('toast-root');
    if (NoticesDom.length) {
      ReactDOM.render(NoticesDom, ToastDiv);
    } else {
      document.body.removeChild(ToastDiv);
    }
  }
}
export default {
  top: (text, timeout) => (Notice.add(text, 'top', timeout)),
  middle: (text, timeout) => (Notice.add(text, 'middle', timeout)),
  bottom: (text, timeout) => (Notice.add(text, 'bottom', timeout)),
  errorTopico: (text, timeout) => (Notice.add(text, 'errorTopico', timeout)),
  yesTopico: (text, timeout) => (Notice.add(text, 'yesTopico', timeout)),
};
