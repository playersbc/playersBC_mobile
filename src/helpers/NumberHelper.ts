import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

function toBRL(value: number) {
  return Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
}

export const NumberHelper = {
  toBRL,
};
