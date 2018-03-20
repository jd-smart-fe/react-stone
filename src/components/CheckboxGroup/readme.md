# Checkbox && Checkboxgroup

## Usage

### 引用单独的checkbox
```javascript
import { Checkbox } from 'ceshi-stone';

<Checkbox value={'5'} id="voiceTypezn" textname="手动发起" onChange={this.oneCheckbox} />
```

### 引入按钮组
```javascript
import { Checkbox, CheckboxGroup } from 'ceshi-stone';

<CheckboxGroup
  selectedValue='2'
  name="productType"
  onChange={this.checkboxGroupChange}>
  <Checkbox value='1' id="voiceType1" textname="手动发起" />
  <Checkbox value='2' id="voiceType2" textname="近场语音唤醒" />
  <Checkbox value='3' id="voiceType3" textname="远场语音唤醒" />
</CheckboxGroup>
```

## Options

属性名   |    类型   |     默认值     |     说明
----    | ----    | ----    | ----    |
id  | String  | '' |  必填，定义按钮的id。
textname  | String  | ''  |  必填，定义按钮的文字。
value | String | '' | 必填，定义按钮的值。
selectedValue | String | '' | 非必填，定义当前按钮组被选择的值。

## Events
方法名称   |    说明    |    参数    |
----    | ----      | ----        |
onChange | 用于CheckboxGroup上，在选项发生变化时触发 | 参数为点击的选项的值
