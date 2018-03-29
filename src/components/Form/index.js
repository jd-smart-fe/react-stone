import assign from 'lodash/assign';
import Form from './Form.jsx';
import InputField from './form-components/FormInput.jsx';
import { FieldInput, FieldCheckbox, FieldSelect, FieldRadioGroup, FieldTextarea } from './form-components/createFormField.jsx';
import CreateForm from './createForm.jsx';

export default assign(Form, {
  Form,
  CreateForm,
  InputField,
  FieldInput,
  FieldCheckbox,
  FieldSelect,
  FieldRadioGroup,
  FieldTextarea,
});
