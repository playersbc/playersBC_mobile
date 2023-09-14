import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const Player2 = yup.object({
  email: yup.string().required('Preencha o email'),
  active: yup.boolean().default(false),
  status: yup.string().default('green'),
  birth_country: yup.string().required('Preencha o Pais de nascimento'),
  birth_state: yup.string().required('Preencha o Estado de nascimento'),
  birth_city: yup.string().required('Preencha a Cidade de nascimento'),
});

export const Player2Resolver = yupResolver(Player2);
