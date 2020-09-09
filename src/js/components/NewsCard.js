import { formatPublishDate } from '../utils/date-formatter';
import BaseComponent from './BaseComponent';
import isLogged from '../utils/is-logged';

export default class NewsCard extends BaseComponent {
  constructor(api) {
    super();
    this.api = api;
    this.data = {};
    this.keyword = '';
  }

  create(data, keyword) {
    const article = document.createElement('article');
    article.classList.add('article');
    this.data = data;
    this.keyword = keyword;
    article.insertAdjacentHTML(
      "beforeend",
      `
    <a href="" class="article__link" target="_blank"><img class="article__image" src="" alt=""/></a>
    <p class="article__tag hider"></p>
    <div class="article__mark-container">
      <p class="article__notice hider"></p>
      <button class="article__mark"></button>
    </div>
    <div class="article__content">
      <span class="article__date"></span>
      <a class="article__link" href="" target="_blank">
        <h3 class="article__title"></h3>
      </a>
      <p class="article__text"></p>
      <span class="article__author"></span>
    </div>
    `
    );
    this._setContent(article, data);

    return article;
  }
  _setContent(article, data) {
    const mark = article.querySelector('.article__mark');
    article.querySelector('.article__tag').textContent = this.keyword[0].toUpperCase() + this.keyword.slice(1);
    article.querySelector('.article__title').textContent = data.title;
    article.querySelector('.article__image').alt = data.title;

    if (!data._id) {
      mark.classList.add('article__mark_type_save');
      Array.from(article.querySelectorAll('.article__link')).forEach(el => {
        el.href = data.url;
      })
      article.querySelector('.article__image').src = data.urlToImage || 'https://bt-220.ru/files/catalog/empty.png';
      article.querySelector('.article__notice').textContent = 'Войдите, чтобы сохранять статьи';
      article.querySelector('.article__date').textContent = formatPublishDate(data.publishedAt);
      article.querySelector('.article__title').textContent = data.title;
      article.querySelector('.article__text').textContent = data.description;
      article.querySelector('.article__author').textContent = data.source.name;
      return this._setEventListeners(article.querySelector('.article__mark_type_save'));
    } else {
      mark.classList.add('article__mark_type_remove');
      article.querySelector('.article__notice').textContent = 'Удалить из сохраненных';
      article.querySelector('.article__tag').classList.remove('hider');
      Array.from(article.querySelectorAll('.article__link')).forEach(el => {
        el.href = data.url;
      })
      article.querySelector('.article__image').src = data.image || 'https://bt-220.ru/files/catalog/empty.png';
      article.querySelector('.article__date').textContent = formatPublishDate(data.date);
      article.querySelector('.article__text').textContent = data.text;
      article.querySelector('.article__author').textContent = data.source;
      this.id = data._id;
      return this._setEventListeners(article.querySelector('.article__mark_type_remove'));
    }
  }

  _setEventListeners(mark) {
    // общие слушатели
    this._setListeners([
      {
        element: mark,
        event: 'mouseenter',
        callback: (e) => this._showNotice(e)
      },
      {
        element: mark,
        event: 'mouseleave',
        callback: (e) => this._hideNotice(e)
      },
    ]);
    // для добавления/удаления
    if (mark.classList.contains('article__mark_type_save')) {
      this._setListeners([
        {
          element: mark,
          event: 'click',
          callback: (e) => this._saveArticle(e)
        },
        {
          element: mark,
          event: 'click',
          callback: (e) => this._deleteArticle(e)
        }
      ]);
    }
    // для удаления из сохраненных в личном кабинете
    else {
      this._setListeners([
        {
          element: mark,
          event: 'click',
          callback: (e) => this._removeSaved(e)
        },
      ]);
    }
  }

  _showNotice(e) {
    // если не залогинен, то предлагаем залогиниться
    if (!isLogged()) {
      e.target.setAttribute('disabled', true);
      // показываем только на десктопах
      if (window.screen.availWidth > 820) {
        e.target.previousElementSibling.classList.remove("hider");
      }
    } else if (isLogged() && e.target.classList.contains('article__mark_type_remove')) {
      if (window.screen.availWidth > 820) {
        return e.target.previousElementSibling.classList.remove("hider");
      }
    } else {
      e.target.removeAttribute('disabled', true);
    }
  }

  _hideNotice(e) {
    e.target.previousElementSibling.classList.add("hider");
  }

  _saveArticle(e) {
    if (isLogged() && !e.target.classList.contains('article__mark_active')) {
      this.api.createArticle
        (
          this.keyword,
          this.data.urlToImage || 'https://bt-220.ru/files/catalog/empty.png',
          this.data.publishedAt,
          this.data.title,
          this.data.description,
          this.data.source.name,
          this.data.url
        )
        .then((res) => {
          e.target.classList.add("article__mark_active");
          this.id = res._id
        })
        .catch((err) => err)
    }
  }
  _deleteArticle(e) {
    if (isLogged() && e.target.classList.contains('article__mark_active')) {
      if (this.id) {
        this.api.removeArticle(this.id)
          .then(() => {
            e.target.classList.remove("article__mark_active");
          })
          .catch((err) => console.error(err))
      }
    }
  }

  _removeSaved(e) {
    if (isLogged() && e.target.classList.contains('article__mark_type_remove')) {
      this.api.removeArticle(this.id)
        .then((res) => {
          console.log(res)
          e.target.closest('.article').remove();
          this.removeListeners();
        })
        .catch((err) => console.error(err))
    }
  }
  removeListeners() {
    this.clearListeners()
  }
}