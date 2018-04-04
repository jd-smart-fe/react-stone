// 注意： 该文件是整个项目的总入口文件。包含两个部分：开发环境用的代码和发包用的代码。
// 上半部分是本地开发是需要的
// 下半部分是发包需要的
// 开发时，把下半部分注释。需要发包时，把上半部分注释。

// 开发环境需要执行的代码
import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import App from './examples/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

// 发包时需要执行的代码

// import Button from './components/Button/Button.jsx';
// import Textarea from './components/Textarea/Textarea.jsx';
// import Select from './components/Select/Select.jsx';
// import Input from './components/Input/Input.jsx';
// import CheckboxGroup from './components/CheckboxGroup/CheckboxGroup.jsx';
// import { Radio, RadioGroup } from './components/RadioGroup/RadioGroup.jsx';
// import Toast from './components/Toast/toast.jsx';
// import modal from './components/Modal/modal.jsx';
// import Pagination from './components/Pagination/Pagination.jsx';
// import DragSort from './components/DragSort/DragSort.jsx';
// import iconfonts from './components/Fonts/icofonts.css';

// export {
//   Button,
//   Input,
//   Textarea,
//   Select,
//   CheckboxGroup,
//   Radio,
//   RadioGroup,
//   Toast,
//   modal,
//   iconfonts,
//   Pagination,
//   DragSort,
// };
