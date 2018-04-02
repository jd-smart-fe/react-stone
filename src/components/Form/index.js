import assign from 'lodash/assign';
import Form from './Form.jsx';
import { FieldInput, FieldCheckbox, FieldSelect, FieldRadioGroup, FieldTextarea } from './form-components/createFormField.jsx';
import CreateForm from './createForm.jsx';

export default assign(Form, {
  Form,
  CreateForm,
  FieldInput,
  FieldCheckbox,
  FieldSelect,
  FieldRadioGroup,
  FieldTextarea,
});
