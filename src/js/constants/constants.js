import { formatDate } from '../utils/date-formatter';

export const ERROR_MESSAGES = {
  valueMissing: 'Это обязательное поле',
  tooShortName: 'Должно быть от 2 до 30 символов',
  tooShortPass: 'Пароль должен быть от 8 до 30 символов',
  typeMismatch: 'Здесь должен быть адрес почты',
};

export const NEWS_API_KEY = 'c5f647a079934de5a37abbf6d7662c1d';
export const DATE_FROM = formatDate(new Date(Date.now() - 7 * 24 * 60 * 60000));
export const DATE_TO = formatDate(new Date());
export const PAGE_SIZE = 100;
export const SERVER_URL = 'https://api.art-explorer.tk';
export const NEWS_API_URL = 'https://nomoreparties.co/news/v2';