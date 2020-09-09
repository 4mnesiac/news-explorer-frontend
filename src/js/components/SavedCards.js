import NewsCardList from "./NewsCardList";

export default class SavedCards extends NewsCardList {
  constructor(container, api, func, title) {
    super();
    this.api = api;
    this.container = container;
    this.func = func;
    this.keyword = '';
    this.title = title;
  }

  renderResults(array) {
    // принимает массив экземпляров карточек
    super._renderResults(array);
  }

  _addArticle(data) {
    const article = this.func(this.api);
    this.container.appendChild(article.create(data, data.keyword));
  }

  setTitle(username, counter) {
    if (counter === 1) {
      this.title.textContent = `${username[0].toUpperCase() + username.slice(1)}, у вас ${counter} сохраненная статья`;
    } else if (counter <= 4 && counter > 1) {
      this.title.textContent = `${username[0].toUpperCase() + username.slice(1)}, у вас ${counter} сохраненные статьи`;
    } else if (counter > 4) {
      this.title.textContent = `${username[0].toUpperCase() + username.slice(1)}, у вас ${counter} сохраненных статей`;
    } else {
      this.title.textContent = 'У вас нет сохранённых статей';
      this.title.nextElementSibling.classList.add('hider');
    }
  }
}