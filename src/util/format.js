import { format } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';

export const { format: formatPrice } = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

export function formatDate(date) {
  return format(date, "dd 'de' MMMM yyyy", {
    locale: pt,
  });
}

export function formatSimpleDate(date) {
  return format(date, 'dd/MM/yyyy', {
    locale: pt,
  });
}
