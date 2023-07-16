import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const LoginScrema = yup.object({
  email: yup
    .string()
    .email('Preencha um e-mail válido')
    .required('Preencha seu e-mail'),
  password: yup.string().required('Preencha sua senha'),
});

export const LoginResolver = yupResolver(LoginScrema);
