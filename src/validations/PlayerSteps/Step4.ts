import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const Player4 = yup.object({
  photo: yup.string(),
  phone: yup.string(),
  privateKey: yup.string(),
});

export const Player4Resolver = yupResolver(Player4);
