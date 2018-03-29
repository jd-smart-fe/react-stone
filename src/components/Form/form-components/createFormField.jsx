import React, { Component } from 'react';
import FormInput from './FormInput';
import FormCheckbox from './FormCheckbox';
import FormSelect from './FormSelect';
import FormRadioGroup from './FormRadio';
import FormTextarea from './FormTextarea';
import Field from '../Field';

export class FieldInput extends Component {
  render() {
    return <Field {...this.props} component={FormInput} />;
  }
}

export class FieldCheckbox extends Component {
  render() {
    return <Field {...this.props} component={FormCheckbox} />;
  }
}

export class FieldSelect extends Component {
  render() {
    return <Field {...this.props} component={FormSelect} />;
  }
}

export class FieldRadioGroup extends Component {
  render() {
    return <Field {...this.props} component={FormRadioGroup} />;
  }
}

export class FieldTextarea extends Component {
  render() {
    return <Field {...this.props} component={FormTextarea} />;
  }
}
