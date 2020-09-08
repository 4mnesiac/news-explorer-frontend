import '../../css/homepage.css';
import MainApi from '../../js/api/MainApi';
import Header from '../../js/components/Header';
import NewsCard from '../../js/components/NewsCard';
import SavedCard from '../../js/components/SavedCards';
import { SERVER_URL, NEWS_API_KEY, NEWS_API_URL } from '../../js/constants/constants';
import isLogged from "../../js/utils/is-logged";

// элементы авторизации и рендера
const logoutBtn = document.querySelector('.header__link_type_logout');
const logoutBtnMobile = document.querySelector('.btn_type_logout');
const headerElement = document.querySelector('header');

// контейнер статей
const articles = document.querySelector('.articles');



// элементы для ключевых слов и статей
const leadSubtitle = document.querySelector('.lead__subtitle');
const firstKeyword = document.querySelector('#firstKeyword');
const secondKeyword = document.querySelector('#secondKeyword');
const otherKeyword = document.querySelector('#otherKeyword');
const keywordConnector = document.querySelector('#keywordConnector')
const leadTitle = document.querySelector('.lead__title');

// инициализация экзмепляров классов
export const api = new MainApi(SERVER_URL);
const newArticle = (api) => new NewsCard(api);
const header = new Header(headerElement, api);
const savedCard = new SavedCard(articles, api, newArticle, leadTitle);

// принимает массив ключевых слов, сортирует по популярности
const getKeywords = (arr) => {
  // посчитать количество повторений
  const res = arr.reduce((array, keyword) => {
    keyword = keyword.toLowerCase();
    const found = array.find(el => el[1] === keyword);
    found ? found[0]++ : array.push([1, keyword]);
    return array;
  }, []);
  const result = res.sort().reverse();
  return result;
};
// отрисовывает ключевые слова
const renderKeywords = (articles) => {
  const cards = Array.from(articles);
  const keywords = [];
  cards.forEach((card) => {
    keywords.push(card.keyword)
  });
  const uniqueKeywords = getKeywords(keywords);
  if (uniqueKeywords.length === 0) {
    leadSubtitle.classList.add('hider');
  }
  else if (uniqueKeywords.length === 1) {
    leadSubtitle.classList.remove('hider');
    firstKeyword.textContent = uniqueKeywords[0][1][0].toUpperCase() + uniqueKeywords[0][1].slice(1);
    keywordConnector.classList.add('hider');
    secondKeyword.textContent = '';
  }
  else if (uniqueKeywords.length === 2) {
    leadSubtitle.classList.remove('hider');
    firstKeyword.textContent = `${uniqueKeywords[0][1][0].toUpperCase() + uniqueKeywords[0][1].slice(1)}, `;
    secondKeyword.textContent = `${uniqueKeywords[1][1][0].toUpperCase() + uniqueKeywords[1][1].slice(1)}`;
    keywordConnector.classList.add('hider');
    otherKeyword.textContent = '';
  }
  else {
    leadSubtitle.classList.remove('hider');
    firstKeyword.textContent = `${uniqueKeywords[0][1][0].toUpperCase() + uniqueKeywords[0][1].slice(1)}, `;
    secondKeyword.textContent = `${uniqueKeywords[1][1][0].toUpperCase() + uniqueKeywords[1][1].slice(1)}`;
    keywordConnector.classList.remove('hider');
    otherKeyword.textContent = `${uniqueKeywords.length - 2} другим`;
  }
}
// получаем статьи и имя владельца, отправляем на рендер
const getArticles = () => {
  api.getUserData()
    .then((res) => {
      const username = res.name;
      api.getArticles()
        .then((result) => {
          renderKeywords(result);
          savedCard.setTitle(username, result.length);
          savedCard.renderResults(result);
        })
    })
    .catch((err) => {
      console.log(err.message);
    });
};

logoutBtnMobile.addEventListener('click', () => {
  localStorage.clear();
  window.location.replace('./index.html')
});
logoutBtn.addEventListener('click', () => {
  localStorage.clear();
  window.location.replace('./index.html')
});

document.addEventListener('DOMContentLoaded', () => {
  if (isLogged()) {
    header.render();
    getArticles();
  } else {
    window.location.replace('./index.html');
  }
})