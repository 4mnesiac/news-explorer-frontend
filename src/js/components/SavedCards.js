import NewsCardList from "./NewsCardList";

export default class SavedCards extends NewsCardList {
  constructor(container, api, func) {
    super();
    this.api = api;
    this.container = container;
    this.func = func;
    this.keyword = '';
  }

  renderResults(array) {
    // принимает массив экземпляров карточек
    super._renderResults(array);
  }

  _addArticle(data) {
    const article = this.func(this.api);
    this.container.appendChild(article.create(data, data.keyword));
  }

  setTitle(username, counter, title) {
    if (counter === 1) {
      title.textContent = `${username[0].toUpperCase() + username.slice(1)}, у вас ${counter} сохраненная статья`;
    } else if (counter <= 4 && counter > 1) {
      title.textContent = `${username[0].toUpperCase() + username.slice(1)}, у вас ${counter} сохраненные статьи`;
    } else if (counter > 4) {
      title.textContent = `${username[0].toUpperCase() + username.slice(1)}, у вас ${counter} сохраненных статей`;
    } else {
      title.textContent = 'У вас нет сохранённых статей';
      title.nextElementSibling.classList.add('hider');
    }
  }
}