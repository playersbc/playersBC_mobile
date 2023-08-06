import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const stakeholder1 = yup.object({
  type: yup.string().required('Preencha o tipo'),
  name: yup.string().required('Preencha o nome'),
  country: yup.string().required('Preencha o pais'),
  state: yup.string().required('Preencha o estado'),
});

export const Stakeholder1Resolver = yupResolver(stakeholder1);
