import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const stakeholder2 = yup.object({
  email: yup.string().required('Preencha o email'),
  active: yup.boolean().default(false),
  status: yup.string().default('green'),
  address: yup.string().required('Preencha o endereço'),
});

export const Stakeholder2Resolver = yupResolver(stakeholder2);
