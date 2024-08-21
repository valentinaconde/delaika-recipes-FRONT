import * as Yup from 'yup';

export const  SignupSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, 'La constraseña debe tener al menos 8 caracteres')
    .max(20, 'La constraseña debe tener menos de 20 caracteres')
    .required('Requerido'),
  email: Yup.string().email('Email invalido').required('Requerido'),
});
