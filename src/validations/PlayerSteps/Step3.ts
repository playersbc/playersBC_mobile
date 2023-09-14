import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const Player3 = yup.object({
  international_id: yup.string().required('Preencha o ID'),
  family_name: yup.string().required('Preencha o nome da familia'),
  first_name: yup.string().required('Preencha o primeiro nome'),
  birth_name: yup.string().required('Preencha o nome de nascimento'),
  language: yup.string().required('Preencha a linguagem'),
  birth_date: yup.string().required('Preencha a data de nascimento'),
});

export const Player3Resolver = yupResolver(Player3);
