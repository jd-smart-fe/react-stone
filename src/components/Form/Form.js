import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { formPure, isFormComplete, isFromValidate } from './formUtils'

const noop = () => {};

const STATUS = {
  Init: 'Init',
  Normal: 'Normal',
  FieldChange: 'FieldChange',
  UpdateFormDataStructure: 'UpdateFormDataStructure',
  Submit: 'Submit'
}

class Form extends React.Component {
  static propTypes = {
    onFieldChange: PropTypes.func,
    onChange: PropTypes.func,
    onSubmit: PropTypes.func
  }
  static defaultProps = {
    onFieldChange: noop,
    onChange: noop,
    onSubmit: noop
  }
  constructor(props) {
    super(props);
    this.state = {
      isComplete: false,
      isValidate: false,
      data: {},
      errorMsgList: []
    }
  }
  componentWillMount () {
    this.children = this.collectFormField(this.props.children)
    this.initFormDataStructure()
  }
  collectFormField = (children) => {
    console.log(children);
    const handleFieldChange = this.handleFieldChange

    /* 简单粗暴，在 Form 更新的时候直接清空上一次保存的 formFields，全量更新，避免 formFields 内容或者数量发生变化时 this.formFields 数据不正确的问题 */
    const FormFields = this.formFields = []

    /**
     * 用来保存 clone 后的子组件的实例
     */
    const Fields = this.field = []

    function getChildList (children) {
      return React.Children.map(children, (el, i) => {
        console.log(el.type.name);
        // 只要 Name 以 _Field 开头，就认为是需要 From 管理的组件
        if (!el || el === null) return null

        const reg = /^_Field/
        const childName = el.type && el.type.name
        if (reg.test(childName)) {
          const child = React.cloneElement(el, {
            key: i,
            ref: (ref) => {
              ref && Fields.push(ref)
            },
            handleFieldChange
          })
          FormFields.push(child)
          return child
        } else {
          if (el.props && el.props.children) {
            const children = getChildList(el.props.children)
            return React.cloneElement(el, {
              key: i,
              children
            })
          } else {
            return el
          }
        }
      })
    }

    return getChildList(children)
  }
  /**
   * 初始化 FormData 结构，给 this.state.data 添加 key 为表单项 name 的属性
   */
  initFormDataStructure = () => {
    this.CURRENT_STATUS = STATUS.Init
    const formData = {
      ...this.state.data
    }
    console.log(formData);
    this.formFields.forEach((formField, k) => {
      const Props = formField.props
      const Data = formField.data
      const Name = Props.name
      // TODO 重写初始化 Form data 方法
      formData[Name] = this.updateFieldData(Props)
    })
    const nextState = {
      ...this.state,
      isComplete: isFormComplete(formData),
      data: formData
    }
    // this.handleFormChange(nextState)
    // this.setStateAndCurrentStatus(nextState, STATUS.Normal)
  }
  // 提交表单逻辑
  handleFormSubmit = () => {
  }
  render () {
    return (
      <form
        onSubmit={e => this.handleFormSubmit(e)}
      >
        {this.children}
      </form>
    )
  }
}

export default Form;