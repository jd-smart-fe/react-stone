import react, { Component, createElement } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

// 这个组件会对各个组件进行封装成为一个表单域
class Field extends Component {
  static contextTypes = {
    rsForm: PropTypes.object,
  };
  constructor(props, context) {
    super(props, context);
    if (!context.rsForm) {
      throw new Error('Field must be in rs-form');
    }
    this.state = {
      _value: props.value,
      _isValid: true,
      _isDirty: false,
      _isValidating: false,
      _initialValue: props.value,
      _validationError: [],
      _externalError: null,
      _asyncValidated: false,
    };
    this._name = props.name;
    this._validations = props.validations || {};
  }
  componentWillMount() {
    if (!this.props.name) {
      throw new Error('Form Field requires a name property when used');
    }
    const rsForm = this.context.rsForm;
    rsForm.attachToForm(this);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.props.value) {
      this.setState({
        _value: nextProps.value
      })
    }
  }
  getValue = () => {
    return this.state._value;
  };
  getName = () => {
    return this._name;
  };
  getInitialValue = () => {
    return this.state._initialValue;
  };
  setValue = (value, needValidate = true) => {
    this.setState(
      {
        _value: value,
        _isDirty: true,
      },
      () => {
        console.log(this.state)
        needValidate && this.context.rsForm.validate(this);
      }
    );
  };
  handleChange = (params, options = { merge: false }) => {
    console.log('handleChange');
    const { onChange, validateOnChange } = this.props;
    this.setValue(params[this.props.name], validateOnChange);
    if (onChange) {
      onChange(params);
    }
  };
  handleBlur = (event, options = { merge: false }) => {
    console.log('handleBlur');
    const { onBlur, asyncValidation, validateOnBlur } = this.props;
    const previousValue = this.getValue();
    const currentValue = options.merge
      ? getCurrentValue(getValue(event), previousValue)
      : getValue(event);
    const newValue = this.normalize(currentValue);
    let preventSetValue = false;

    if (onBlur) {
      onBlur(event, newValue, previousValue, () => (preventSetValue = true));
    }

    this.setState({
      _active: false,
    });

    if (!preventSetValue) {
      this.setValue(newValue, validateOnBlur);
      if (asyncValidation) {
        this.context.zentForm.asyncValidate(this, newValue).catch(error => {
          // eslint-disable-next-line
          console.log(error);
        });
      }
    }
  };
  isValid = () => {
    return this.state._isValid;
  };
  isValidating = () => {
    return this.state._isValidating;
  };
  getErrorMessage = () => {
    const errors = this.getErrorMessages();
    return errors.length ? errors[0] : null;
  };
  getErrorMessages = () => {
    const { _externalError, _validationError } = this.state;
    return !this.isValid() ? _externalError || _validationError || [] : [];
  };
  render() {
    const { component, ...rest } = this.props;
    const resultProps = {
      ...rest,
      ref: ref => {
        this.wrappedComponent = ref;
      },
      onChange: this.handleChange,
      onBlur: this.handleBlur,
      value: this.getValue(),
      isValid: this.isValid(),
      error: this.getErrorMessage(),
      errors: this.getErrorMessages(),
    }
    return createElement(
        component,
        resultProps
      )
  }
}

export default Field;
