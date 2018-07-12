import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import CheckboxGroup from '../../../components/CheckboxGroup/CheckboxGroup';
import Button from '../../../components/Button/Button.jsx';
import { Radio } from '../../../components/RadioGroup/RadioGroup.jsx';
import Form from '../../../components/Form/index.js';
import Modal from '../../../components/Modal/modal';
import * as code from './docs.js';
import DemoWrap from '../../components/DemoWrap/DemoWrap';

const {
  CreateForm,
  FieldInput,
  FieldCheckbox,
  FieldSelect,
  FieldRadioGroup,
  FieldTextarea,
} = Form;

const getContentComponent = (data) => {
  return (
    <p>{data}</p>
  )
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

const selectChange = (val) => {
  console.log(val);
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
        Modal.open({
          "size": 'sm',
          "title": '提示',
          "template": getContentComponent(('校验通过！！！你要提交的表单数据是：' + JSON.stringify(this.props.rsForm.getFormValues()))),
        });
        console.log('可以提交的表单：',this.props.rsForm.getFormValues())
      } else {
        console.log('No！表单校验不通过')
        console.log('错误的表单：', this.props.rsForm.getFormValues())
      }
    })
  }
  productTypeChangexs = (val) => {
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

class FormBase extends Component {
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
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  render() {
    return (
      <div className="markdown">
        <ReactMarkdown source={code.desc} />
        <h2>代码示例</h2>
        <DemoWrap desc="基础用法" code={code.base}>
          <FormBase />
        </DemoWrap>
        <ReactMarkdown source={code.api} />
      </div>
    );
  }
}

export default App;
