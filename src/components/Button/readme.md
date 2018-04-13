# Button
按钮组件，展示型组件，不包含特定功能。


## How to use?

```jsx
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'react-stone';

class App extends Component {
  render(){
    return (
      <div>
        <Button>Button Base</Button>
        <Button theme='gray'>Button theme gray</Button>
        <Button size='small'>Button small</Button>
        <Button size='base'>Button base</Button>
        <Button size='large'>Button large</Button>
        <Button disabled={true}>Button Disabled</Button>
        <Button radius='circle' icon="delete" />
        <Button icon="delete">delect</Button>
        <Button htmlType='submit'>Button Submit</Button>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
```

## Options

属性名   |    类型   |     默认值     |     说明
----    | ----    | ----    | ----    |
size  | String  | 'base' |  定义按钮大小，可选值 'small', 'base', 'large'。
icon  | String  | ''  |  定义按钮图标。参考图标字体文档。
radius | String | 'small' | 定义圆角大小， 可选 'small','half','circle'。
disabled | Boolean | false | 是否禁用按钮。
htmlType | String | button | 设置 button 原生的 type 值，可选值请参考 [HTML 标准](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/button)
theme | String | 'button' | 按钮主题颜色，目前可选'blue','gray'。分别对应两类按钮‘确定’，‘取消’

## Events
方法名称   |    说明    |    参数    |
----    | ----      | ----        |
onClick	 | click 事件的 handler | ''
