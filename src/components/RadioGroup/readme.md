# Radio && RadioGroup

 - 用于在多个备选项中选中单个状态。

## How to use?

### 引用单独的raido
```javascript
import { Radio } from 'ceshi-stone';

<Radio value={'5'} checked={true} id="voiceTypezn" textname="硬件设备" />
```

### 引入按钮组
```javascript
import { Radio, RadioGroup } from 'ceshi-stone';

<RadioGroup
  selectedValue={this.state.productType}
  onChange={this.productTypeChange}
  name="device-type">
  <Radio value={1} id="productType1" textname="硬件设备"></Radio>
  <Radio value={2} id="productType2" textname="软件应用"></Radio>
</RadioGroup>
```

## Options

### Radio

属性名   |    类型   |     默认值     |     说明
----    | ----    | ----    | ----    |
id  | String  | 无 |  必填，定义按钮的id。
checked | Boolean | false | 指定当前是否选中
value | String | '' | 定义按钮的值。
textname  | String  | ''  |  必填，定义按钮的文字。

### RadioGroup

属性名   |    类型   |     默认值     |     说明
----    | ----    | ----    | ----    |
name | String | 无 | RadioGroup 下所有 input[type="radio"] 的 name 属性
selectedValue | Any | 无 | 默认选中的值
value | String | 无 | 必填，用于设置当前选中的值


## Events
方法名称   |    说明    |    参数    |
----    | ----      | ----        |
onChange | 用于RadioGroup上，在选项发生变化时触发 | 当前组件的props，比如{value: 2, id: "productType2", textname: "软件应用"}
