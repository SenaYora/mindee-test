import * as yup from 'yup';

export default yup.object({
  name: yup
    .string()
    .required('Name is required'),
  description: yup
    .string()
    .required('Description is required'),
});
