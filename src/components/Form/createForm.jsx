import { Component, createElement } from 'react';
import omit from 'lodash/omit';
import find from 'lodash/find';
import noop from 'lodash/noop';
import assign from 'lodash/assign';
import isEqual from 'lodash/isEqual';
import some from 'lodash/some';
import get from 'lodash/get';
import map from 'lodash/map';
import PropTypes from 'prop-types';

import {
  getDisplayName,
} from '../../lib/utils.js';
import rules from '../../lib/validationRules';

const createForm = (config = {}) => {
  const {
    formValidations,
    onChange,
    scrollToError,
  } = config;
  const validationRules = assign({}, rules, formValidations);

  return WrappedForm => {
    return class Form extends Component {
      constructor(props) {
        super(props);
        this.state = {
          isFormValid: true,
          isSubmitting: false,
          submitFail: false,
          submitSuccess: false,
        };
        this.fields = [];
        this._isMounted = false;
      }

      static displayName = `Form(${getDisplayName(WrappedForm)})`;
      static WrappedForm = WrappedForm;

      static propTypes = {
        onSubmit: PropTypes.func,
        onValid: PropTypes.func,
        onInvalid: PropTypes.func,
        onChange: PropTypes.func,
        validationErrors: PropTypes.object,
        scrollToError: PropTypes.bool,
      };

      static defaultProps = {
        onSubmit: noop,
        onValid: noop,
        onInvalid: noop,
        onChange: onChange || noop,
        validationErrors: null,
        scrollToError: scrollToError || false,
      };

      static childContextTypes = {
        rsForm: PropTypes.object,
      };

      getChildContext() {
        return {
          rsForm: {
            attachToForm: this.attachToForm,
            detachFromForm: this.detachFromForm,
            validate: this.validate,
            getFormValues: this.getFormValues,
            getFieldError: this.getFieldError,
            isValidValue: this.isValidValue,
            setFieldExternalErrors: this.setFieldExternalErrors,
            resetFieldsValue: this.resetFieldsValue,
            setFormDirty: this.setFormDirty,
            setFormPristine: this.setFormPristine,
            isValid: this.isValid,
            isSubmitting: this.isSubmitting,
            validateForm: this.validateForm,
            isFormSubmitFail: this.isFormSubmitFail,
            isFormSubmitSuccess: this.isFormSubmitSuccess,
            updateFormSubmitStatus: this.updateFormSubmitStatus,
          },
        };
      }

      componentDidMount() {
        this.validateForm();
        this._isMounted = true;
      }

      componentWillUpdate() {
        this.prevFieldNames = this.fields.map(field => field.getName());
      }

      componentDidUpdate() {
        const { validationErrors } = this.props;
        if (
          validationErrors &&
          typeof validationErrors === 'object' &&
          Object.keys(validationErrors).length > 0
        ) {
          this.setFieldValidationErrors(validationErrors);
        }

        const newFieldNames = this.fields.map(field => field.getName());
        if (!isEqual(this.prevFieldNames, newFieldNames)) {
          this.validateForm();
        }
      }

      submitCompleted = result => {
        delete this.submitPromise;
        this.updateFormSubmitStatus(false);
        return result;
      };

      submitFailed = error => {
        delete this.submitPromise;
        this.updateFormSubmitStatus(true);
        throw error;
      };

      listenToSubmit = promise => {
        // if (!isPromise(promise)) {
        //   return promise;
        // }
        // 当submit是一个promise时，需要一个标识表明正在提交，提交结束后删除标识
        this.submitPromise = promise;
        console.log(promise)
        return promise.then(this.submitCompleted, this.submitFailed);
      };

      isSubmitting = () => {
        return this.state.isSubmitting;
      };

      isValid = () => {
        return this.state.isFormValid;
      };

      setFieldValidationErrors = (errors, updateDirty = true) => {
        this.fields.forEach(field => {
          const name = field.getName();
          const data = {
            _isValid: !(name in errors),
            _validationError:
              typeof errors[name] === 'string' ? [errors[name]] : errors[name],
          };
          if (updateDirty) {
            data._isDirty = true;
          }
          field.setState(data);
        });
      };

      // 设置服务端返回的错误信息
      setFieldExternalErrors = (errors, updateDirty = true) => {
        this.fields.forEach(field => {
          const name = field.getName();
          const error = get(errors, name);
          const data = {
            _isValid: false,
            _externalError: typeof error === 'string' ? [error] : error,
          };
          if (updateDirty) {
            data._isDirty = true;
          }
          field.setState(data);
        });
        // 滚动到第一个错误处
        // this.props.scrollToError && srcollToFirstError(this.fields);
      };

      setFormDirty = (isDirty = true) => {
        this.fields.forEach(field => {
          field.setState({
            _isDirty: isDirty,
          });
        });
      };

      setFormPristine = (isPristine = false) => {
        this.fields.forEach(field => {
          field.setState({
            _isDirty: !isPristine,
          });
        });
      };

      initialize = data => {
        this.fields.forEach(field => {
          const name = field.getName();
          const value = get(data, name);
          if (value !== undefined) {
            field.setInitialValue(value);
          } else {
            field.setInitialValue();
          }
        });
      };

      resetFieldsValue = data => {
        this.fields.forEach(field => {
          const name = field.getName();
          const value = get(data, name);
          if (value !== undefined) {
            field.setValue(value);
          } else {
            field.resetValue();
          }
        });
      };

      setFieldsValue = data => {
        this.fields.forEach(field => {
          const name = field.getName();
          const value = get(data, name);
          if (value !== undefined) {
            field.setValue(value);
          }
        });
      };

      reset = data => {
        this.setFormDirty(false);
        this.resetFieldsValue(data);
      };

      isFieldDirty = name => {
        const field = find(
          this.fields,
          component => component.getName() === name
        );

        if (!field) return false;
        return field.isDirty();
      };

      isFieldValidating = name => {
        const field = find(
          this.fields,
          component => component.getName() === name
        );

        if (!field) return false;
        return field.isValidating();
      };

      getFieldError = name => {
        const field = find(
          this.fields,
          component => component.getName() === name
        );
        console.log(field.getErrorMessage());
        if (!field) return '';
        return field.getErrorMessage();
      };
      // 获取表单所有表单域的值
      getFormValues = () => {
        const assignValue = (values, keyPath, newValue) => {
          if (keyPath.length === 0) {
            return;
          }
          let currentKey = keyPath[0];
          if (/\[\d+\]/.test(currentKey)) {
            // array
            let index = currentKey.match(/\d+(?=\])/)[0];
            currentKey = currentKey.replace(/\[\d+\]/, '');
            if (!values[currentKey]) {
              values[currentKey] = [];
            }
            if (keyPath.length > 1) {
              if (!values[currentKey][index]) {
                values[currentKey][index] = {};
              }
              assignValue(
                values[currentKey][index],
                keyPath.slice(1),
                newValue
              );
            } else {
              values[currentKey][index] = newValue;
            }
          } else {
            // object
            if (!values[currentKey]) {
              values[currentKey] = {};
            }
            if (keyPath.length > 1) {
              assignValue(values[currentKey], keyPath.slice(1), newValue);
            } else {
              values[currentKey] = newValue;
            }
          }
        };

        return this.fields.reduce((values, field) => {
          const name = field.getName();
          const fieldValue = field.getValue();
          const fieldNamePath = name.split('.');
          assignValue(values, fieldNamePath, fieldValue);
          return values;
        }, {});
      };

      getValidationErrors = () => {
        return this.fields.reduce((errors, field) => {
          const name = field.getName();
          errors[name] = field.getErrorMessage();
          return errors;
        }, {});
      };

      getInitialValues = () => {
        return this.fields.reduce((values, field) => {
          const name = field.getName();
          values[name] = field.getInitialValue();
          return values;
        }, {});
      };

      isChanged = () => {
        return !isEqual(this.getInitialValues(), this.getFormValues());
      };

      isValidating = () => {
        return some(this.fields, field => {
          return field.isValidating();
        });
      };

      isValidValue = (field, value) => {
        return this.runValidation(field, value).isValid;
      };

      updateFormSubmitStatus = submitSuccess => {
        this.setState({
          submitFail: !submitSuccess,
          submitSuccess,
        });
      };

      isFormSubmitFail = () => {
        return this.state.submitFail;
      };

      isFormSubmitSuccess = () => {
        return this.state.submitSuccess;
      };

      runValidation = (field, value = field.getValue()) => {
        const formValidationErrors = this.props.validationErrors;
        const { name, validationError, validationErrors } = field.props;
        const currentValues = this.getFormValues();
        const validationResults = this.runRules(
          value,
          currentValues,
          field._validations
        );
        const isValid =
          !validationResults.failed.length &&
          !(formValidationErrors && formValidationErrors[field.getName()]);
        return {
          isValid,
          error: (function() {
            if (isValid) {
              return [];
            }

            if (validationResults.errors.length) {
              return validationResults.errors;
            }

            if (formValidationErrors && formValidationErrors[name]) {
              return typeof formValidationErrors[name] === 'string'
                ? [formValidationErrors[name]]
                : formValidationErrors[name];
            }

            if (validationResults.failed.length) {
              return validationResults.failed
                .map(failed => {
                  return validationErrors[failed]
                    ? validationErrors[failed]
                    : validationError;
                })
                .filter((x, pos, arr) => {
                  // Remove duplicates
                  return arr.indexOf(x) === pos;
                });
            }
          })(),
        };
      };

      runRules = (value, currentValues, validations = []) => {
        const results = {
          errors: [],
          failed: [],
        };

        function updateResults(validation, validationMethod) {
          // validation方法可以直接返回错误信息，否则需要返回布尔值表明校验是否成功
          if (typeof validation === 'string') {
            results.errors.push(validation);
            results.failed.push(validationMethod);
          } else if (!validation) {
            results.failed.push(validationMethod);
          }
        }

        Object.keys(validations).forEach(validationMethod => {
          // validations中不指定function则必须是内置的rule
          if (
            !validationRules[validationMethod] &&
            typeof validations[validationMethod] !== 'function'
          ) {
            throw new Error(
              `does not have the validation rule: ${validationMethod}`
            );
          }

          // 使用自定义校验方法或内置校验方法（可以按需添加）
          if (typeof validations[validationMethod] === 'function') {
            const validation = validations[validationMethod](
              currentValues,
              value
            );
            updateResults(validation, validationMethod);
          } else {
            const validation = validationRules[validationMethod](
              currentValues,
              value,
              validations[validationMethod]
            );
            updateResults(validation, validationMethod);
          }
        });
        return results;
      };

      validate = field => {
        // 初始化时调用validate不触发onChange
        if (this._isMounted) {
          this.props.onChange(this.getFormValues(), this.isChanged());
        }

        const validation = this.runValidation(field);
        field.setState(
          {
            _isValid: validation.isValid,
            _validationError: validation.error,
            _externalError: null,
          },
          () => this.validateForm(false, null, field.props.relatedFields)
        );
      };

      validateForm = (forceValidate = false, callback, relatedFields) => {
        const onValidationComplete = index => {
          if (index !== this.fields.length - 1) {
            return;
          }
          console.log(index);
          const allIsValid = this.fields.every(field => {
            return field.isValid();
          });
          console.log(allIsValid);
          this.setState(
            {
              isFormValid: allIsValid,
            },
            callback
          );

          if (allIsValid) {
            this.props.onValid();
          } else {
            this.props.onInvalid();
          }
        };

        this.fields.forEach((field, index) => {
          if (!forceValidate && !field.props.validateOnBlur) {
            return;
          }
          if (
            relatedFields === undefined ||
            (relatedFields && relatedFields.indexOf(field.getName()) >= 0)
          ) {
            const { _externalError } = field.state;
            const validation = this.runValidation(field);
            if (validation.isValid && _externalError) {
              validation.isValid = false;
            }

            field.setState(
              {
                _isValid: validation.isValid,
                _validationError: validation.error,
                _externalError:
                  !validation.isValid && _externalError ? _externalError : null,
              },
              () => onValidationComplete(index)
            );
          } else {
            onValidationComplete(index);
          }
        });
      };

      attachToForm = field => {
        if (this.fields.indexOf(field) < 0) {
          this.fields.push(field);
        }
        // form初始化时不校验，后续动态添加的元素再校验
        this._isMounted && this.validate(field);
      };

      detachFromForm = field => {
        const fieldPos = this.fields.indexOf(field);
        if (fieldPos >= 0) {
          this.fields.splice(fieldPos, 1);
        }
        this.validateForm();
      };

      getWrappedForm = () => {
        return this.wrappedForm;
      };

      render() {
        const passableProps = omit(this.props, [
          'validationErrors',
          'handleSubmit',
          'onChange',
        ]);
        return createElement(WrappedForm, {
          ...passableProps,
          ref: ref => {
            this.wrappedForm = ref;
          },
          rsForm: {
            getFormValues: this.getFormValues,
            getFieldError: this.getFieldError,
            setFieldExternalErrors: this.setFieldExternalErrors,
            resetFieldsValue: this.resetFieldsValue,
            setFieldsValue: this.setFieldsValue,
            setFormDirty: this.setFormDirty,
            setFormPristine: this.setFormPristine,
            initialize: this.initialize,
            isFieldDirty: this.isFieldDirty,
            isFieldTouched: this.isFieldDirty,
            isFieldValidating: this.isFieldValidating,
            isValid: this.isValid,
            isValidating: this.isValidating,
            isSubmitting: this.isSubmitting,
            validateForm: this.validateForm,
            isFormSubmitFail: this.isFormSubmitFail,
            isFormSubmitSuccess: this.isFormSubmitSuccess,
            updateFormSubmitStatus: this.updateFormSubmitStatus,
          },
        });
      }
    };
  };
};

export default createForm;
