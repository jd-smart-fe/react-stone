##  支持属性
1. mask:Boolean 是否展示遮罩层。
2. closeable:Boolean  是否展示右上角关闭按钮
3. footer:Boolean  是否展示底部按钮（确认、取消）
4. cancelBtn:Booean 是否显示取消按钮
5. okText：string  确定按钮文字
6. cancelText：string  取消按钮文字
7.  size:['sm','','lg']或false  模态框的大小 默认'sm'  'sm' {width:'400px',height:'300px'}， size 为空或false时 大小为{width:'600px',height:'400px'}  'lg' {width:'900px',height:'600px'}
8. template: Component 模态框内部内容
##  支持事件
1. onCancel:传入模态框的回调函数，关闭时触发
2. onOk:传入模态框的回调函数，点击确认时触发


# Modal对话框
模态对话框。


## How to use?
```javascript
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { modal } from 'ceshi-stone';

class App extends Component {
  openModal = () => {
    const myModal = modal.open({
      "size": 'sm',
      "template": this.getContentComponent(),
      "onCancel": this.closeModal,
      "onOk": this.okModal
    });
    // 该组件提供代码关闭弹框的手段，调用close方法即可！
    setTimeout(() => {
      myModal.close()
    }, 2000);
  }
  getContentComponent = () => {
    return (
      <div>
        <div className="modal-header">
            <span>提示</span>
        </div>
        <div className="modal-body">
            <p>如果没有保存，数据将会丢失，确认取消吗？</p>
        </div>
    </div>
    )
  }
  render(){
    return (
      <div>
        <Button onClick={this.openModal}>Open Modal</Button>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

```

## 组件方法

方法名   |    参数     |     说明
----    |  ----    | ----    |
open | 接受一个对象，包含所有的参数 | 目前调用modal组件的唯一方法，调用后会返回这个组件本身，可用于后期手动移除！
close | 无需传递参数 | 关闭modal组件


## Options

属性名   |    类型   |     默认值     |     说明
----    | ----    | ----    | ----    |
mask  | Boolean  | true |  是否需要蒙层
closeable  | Boolean  | true  |  是否展示右上角关闭按钮
footer | Boolean | true | 是否展示底部按钮（确认、取消）
cancelBtn | Boolean | true | 是否显示取消按钮
okText | String | '确定' | 定义确定按钮文字
cancelText | String | '取消' | 定义取消按钮文字
template | JSX | 无默认值 | Component 模态框内部内容
size | String | 'sm' | ['sm','','lg']或false  模态框的大小 默认'sm'  'sm' {width:'400px',height:'300px'}， size 为空或false时 大小为{width:'600px',height:'400px'}  'lg' {width:'900px',height:'600px'}

## Events
方法名称   |    说明    |    参数    |
----    | ----      | ----        |
onCancel	 | 传入模态框的回调函数，关闭时触发 | 待确认
onOK	 | 传入模态框的回调函数，点击确认时触发 | 待确认
