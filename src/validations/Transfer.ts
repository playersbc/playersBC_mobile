import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const TransferSchema = yup.object({
  type: yup.string().required('Preencha o tipo'),
  value: yup.string().required('Preencha o valor'),
  date: yup.string().required('Preencha a data'),
  init_contract: yup.string().required('Preencha o inicio do contrato'),
  end_contract: yup.string().required('Preencha o fim do contrato'),
  salary: yup.string().required('Preencha o valor'),
  contract: yup.string(),
});

export const TransferResolver = yupResolver(TransferSchema);
