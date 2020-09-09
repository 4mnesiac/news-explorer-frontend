import BaseComponent from "./BaseComponent";
import { DATE_FROM, DATE_TO, PAGE_SIZE } from '../constants/constants';
import locker from '../utils/locker';

export default class Search extends BaseComponent {
  constructor(cardList, notFound, preloader, form, api) {
    super();
    this.form = form;
    this.cardList = cardList;
    this.notFound = notFound;
    this.preloader = preloader;
    this.api = api;
  }

  setEventListeners() {
    this._setListeners([
      {
        element: this.form,
        event: 'submit',
        callback: (e) => this.getNews(e)
      },
      {
        element: this.form,
        event: 'input',
        callback: (e) => this._checkValidity(e)
      },

    ])
  }

  renderLoader() {
    // отрисовка лоудера
    this.preloader.classList.toggle('hider');
  }

  _renderError(error) {
    // принимает ошибку запроса
    const title = this.notFound.querySelector('.not-found__title')
    const text = this.notFound.querySelector('.not-found__subtitle')
    // показываем блок ошибки
    this.notFound.classList.remove('hider');
    // рендерим содержимое
    title.textContent = error.message;
    error.message === 'Ничего не найдено'
      ? text.textContent = `К сожалению по вашему запросу ничего не найдено.`
      : text.textContent = 'Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.'
  }

  getNews(e) {
    e.preventDefault();
    this.cardList.clear();
    this.notFound.classList.add('hider');
    locker(this.form);
    this.renderLoader();
    const input = this.form.querySelector('input').value;
    this.api.getNews(input, DATE_FROM, DATE_TO, PAGE_SIZE)
      .then((res) => {
        locker(this.form);
        this.renderLoader();
        if (res.length === 0) {
          return this._renderError(new Error('Ничего не найдено'));
        }
        if (res.status === "error") {
          console.error(res.error);
          return this._renderError(new Error('Во время запроса произошла ошибка'));
        };
        return this.cardList.getArticles(res, input);
      })
  }
  _checkValidity(e) {
    const emptyInput = 'Нужно ввести ключевое слово';
    const error = this.form.querySelector('.lead__form-error');
    if (e.target.validity.valueMissing) {
      error.textContent = emptyInput;
      error.classList.remove('hider');
    }
    else {
      error.textContent = '';
      error.classList.add('hider');
    }
  }
}