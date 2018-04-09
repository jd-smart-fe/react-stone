## Options

属性名   |    类型   |     默认值     |     说明
----    | ----    | ----    | ----    |
size  | String  | 'base' |  定义按钮大小，可选值 'small', 'base', 'large'。
icon  | String  | 无  |  定义按钮图标。参考图标字体文档。
radius | String | 'small' | 定义圆角大小， 可选 'small','half','circle'。
disabled | Boolean | false | 是否禁用按钮。
htmlType | String | 'button' | 设置 button 原生的 type 值，可选值请参考 [HTML 标准](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/button)
theme | String | 'blue' | 按钮主题颜色，目前可选'blue','gray'。分别对应两类按钮‘确定’，‘取消’

## Events
方法名称   |    说明    |    参数    |
----    | ----      | ----        |
onClick	 | click 事件的 handler | event
