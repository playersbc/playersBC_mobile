import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const stakeholder3 = yup.object({
  photo: yup.string().required('Preencha a foto'),
  phone: yup.string().required('Preencha o telefone'),
  privateKey: yup.string().required('Preencha a chave privada'),
});

export const Stakeholder3Resolver = yupResolver(stakeholder3);
