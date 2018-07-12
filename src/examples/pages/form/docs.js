const desc = `
  # Form 表单
   - 具有数据收集、校验和提交功能的表单，包含复选框、单选框、输入框、下拉选择框等元素。
   - 使用 Form 组件，必须先调用 createForm 方法包装，为表单注入 rsForm 属性，从而提供表单和表单元素的各种操作方法
`;

const base = `
  \`\`\`jsx
  import React, { Component } from 'react';
  import ReactDOM from 'react-dom';
  import { Button, Radio, Form } from 'react-stone;

  const {
    CreateForm,
    FieldInput,
    FieldCheckbox,
    FieldSelect,
    FieldRadioGroup,
    FieldTextarea,
  } = Form;

  const selectChange = (val) => {
    console.log(val);
  }

  const saleVolumes = [
    {
      label: '<1000',
      value: 1
    },
    {
      label: '1001~10000',
      value: 2
    },
    {
      label: '10001~100000',
      value: 3
    },
    {
      label: '100001~1000000',
      value: 4
    },
    {
      label: '>1000000',
      value: 5
    }
  ];

  const getContentComponent = (data) => {
    return (
      <p>{data}</p>
    )
  }

  class FieldForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        options1: [
          { label: 'Apple', value: 'Apple' },
          { label: 'Pear', value: 'Pear' },
          { label: 'Orange', value: 'Orange' },
        ],
        checkedBoxValue: [],
        formDate: {},
        productTypexs: null
      }
    }
    formSubmit = (e) => {
      e.preventDefault();
      this.props.rsForm.validateForm(true, () => {
        if (this.props.rsForm.isValid()) {
          console.log('Yes！表单通过');
          console.log('可以提交的表单：',this.props.rsForm.getFormValues())
          Modal.open({
            "size": 'sm',
            "title": '提示',
            "template": getContentComponent('校验通过！你要提交的表单数据是：' + JSON.stringify(this.props.rsForm.getFormValues())),
          });
        } else {
          console.log('No！表单校验不通过')
          console.log('错误的表单：', this.props.rsForm.getFormValues())
        }
      })
    }
    productTypeChangexs = (val) => {
      console.log(val);
      this.setState({
        productType: val.value
      })
    }
    render() {
      return (
        <Form onSubmit={this.formSubmit}>
          <FieldInput
            required
            name="name"
            label="姓名"
            validations={{ required: true }}
            validationErrors={{ required: '必填项' }}
            />
          <FieldInput
            required
            name="email"
            validations={{ isEmail: true }}
            validationErrors={{ isEmail: '邮箱格式不正确' }}
            label="邮箱"/>
          <FieldInput
            name="地址"
            label="地址"/>
          <FieldSelect
            name="select"
            label="数量"
            placeholder="请选择"
            optionData={saleVolumes}
            onChange={selectChange}/>
          <FieldTextarea
            required
            name="自我描述"
            label="自我描述"
            validations={{ required: true }}
            validationErrors={{ required: '必填项' }}/>
          <FieldRadioGroup
            name="单选"
            label="单选"
            value={this.state.productTypexs}
            onChange={this.productTypeChangexs}
            >
            <Radio value={1} id="productType1xx" textname="硬件设备"></Radio>
            <Radio value={2} id="productType2xx" textname="软件应用"></Radio>
          </FieldRadioGroup>
          <FieldCheckbox
            required
            name="多选"
            label="多选"
            options={this.state.options1}
            value={this.state.checkedBoxValue}
            validations={{
              isMore(values, value) {
                return value.length >= 2;
              }
            }}
            validationErrors={{ isMore: '不能低于两项' }}/>
            <div style={{
              marginLeft: '120px',
              width: '150px',
              display: 'flex',
              justifyContent: 'space-between'
            }}>
              <Button theme='gray'>取消</Button>
              <Button htmlType="submit">提交</Button>
            </div>
        </Form>
      );
    }
  }

  const WrappedForm = CreateForm()(FieldForm);

  class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
      };
    }
    render() {
      return (
        <WrappedForm/>
      );
    }
  }

  ReactDOM.render(<App />, document.getElementById('root'));
  \`\`\`
`;

const api = `
  # API

  ## Form
  对 html 中 form 元素的一个简单封装.

  属性名   |    类型   |     默认值     |     说明
  ----    | ----    | ----    | ----    |
  onSubmit  | func(e:Event)  | noop |  表单提交回调
  style | object | null | 内联样式
  disableEnterSubmit | boolean | true | 禁止回车提交表单
  className | string | '' | 自定义额外类名

  ## Form.createForm

  使用方式：Form.createForm(options)(FormComponent)

  options 支持的配置项如下:

  属性名   |    类型   |     默认值     |     说明
  ----    | ----    | ----    | ----    |
  formValidations  | object  | {} |  用于添加自定义校验方法, 通过这种方式添加的方法在 validations 中使用时可以传额外的参数

  ## rsForm
  经过 Form.createForm 包装的组件通过 props 被添加了 rsForm 属性, 可以通过 this.props.rsForm 访问, rsForm 提供的 API 如下：

  属性名   |    类型    |     说明
  ----    | ----    |  ----    |
  getFormValues  | func  |  获取与 form 绑定的所有表单元素值
  getFieldError | func(name: String) | 获取某个 Field 的错误信息, 没有报错信息返回空
  isValid  | func  |  表单的所有 Field 是否都通过了校验
  setFieldsValue  | func(data: Object)  |  设置表单 Field 的值为指定值
  resetFieldsValue  | func(data: Object)  |  把所有 Field 的值恢复到指定值或初始状态
  validateForm | func(forceValidate: Boolean, callback: Function) | 强制表单进行同步校验

  ## 内置 validation rules
  可以直接在 Field 的 validations 属性中使用, 内置规则如下：

  | 规则名 | 说明 | 可传参数 |
  |------|------|------|
  | required | 是否必填 | 任意，传 true 是为了表意，传其他值也是当作必填，下同 |
  | isExisty | 是否非 null ，非 undefined | 任意 |
  | matchRegex | 是否匹配指定正则表达式 | Regex |
  | isEmail | 是否邮件类型字符串 | 任意 |
  | isUrl | 是否 url 类型 | 任意 |
  | isTrue | 是否true | 任意 |
  | isFalse | 是否false | 任意 |
  | isNumeric | 是否数字类型 | 任意 |
  | isInt | 是否整数 | 任意 |
  | isFloat | 是否小数 | 任意 |
  | isLength | 字符串或数组是否为指定长度 | 长度值(Number) |
  | equals | 是否与指定值相等 | 指定值 |
  | equalsField | 是否与表单中的其他元素值相等 | 其他 Field 的name(String) |
  | maxLength | 字符串或数组不能超过指定长度 | 长度值(Number) |
  | minLength | 字符串或数组不能小于指定长度 | 长度值(Number) |

`;

export {
  desc,
  base,
  api,
};
