import * as yup from 'yup';

export const registerSchema = yup.object().shape({
  name: yup
    .string()
    .required('Enter your name')
    .min(3, 'Min Name length 3 characters'),
  email: yup.string().email('Enter valid email').required('Enter email'),
  message: yup.string().optional(),
});
