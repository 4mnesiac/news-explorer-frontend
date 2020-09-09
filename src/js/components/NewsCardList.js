import BaseComponent from './BaseComponent';

export default class NewsCardList extends BaseComponent {
  constructor(container, showMoreBtn, func, api) {
    super();
    this.container = container;
    this.showMoreBtn = showMoreBtn;
    this.api = api;
    this.func = func;
    this._news = [];
    this.keyword = '';
  }

  setEventListeners() {
    this._setListeners([
      {
        element: this.showMoreBtn,
        event: 'click',
        callback: this._showArticles.bind(this),
      }
    ])
  }

  _renderResults(array) {
    // принимает массив экземпляров карточек
    for (const elem of array) {
      this._addArticle(elem);
    }
  }

  _addArticle(data) {
    const article = this.func(this.api);
    this.container.appendChild(article.create(data, this.keyword || data.keyword));
  }

  showMore() {
    // кнопка показать еще
    if (this._news.length > 0) {
      this.showMoreBtn.classList.remove('hider');
    } else {
      this.showMoreBtn.classList.add('hider');
    }
  }

  getArticles(news, keyword) {
    // получим массив, сохраним и отправим на отображение
    this._news = news;
    this.keyword = keyword;
    this._showArticles();
  }

  _showArticles() {
    // если новости есть, покажем блок результатов
    if (this._news.length > 0) {
      this.container.closest('.search-results').classList.remove('hider');
    }
    // отправим на рендер 3 карточки
    this._renderResults(this._news.slice(0, 3));
    // и удалим их из первоначального массива
    this._news.splice(0, 3);
    // инициализируем кнопку Показать еще
    this.showMore();
    // вернем и сохраним урезанный массив
    return this._news.slice(0);
  }

  clear() {
    const content = this.container.children;
    this._news.length = 0;
    if (content) {
      content.forEach(element => {
        element.remove();
      })
    }
    this.container.parentNode.classList.add('hider');
  }
}