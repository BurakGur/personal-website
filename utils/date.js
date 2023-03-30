import { locale } from 'config';

export const dateToLocaleString = date => {
  return new Date(date).toLocaleString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};
