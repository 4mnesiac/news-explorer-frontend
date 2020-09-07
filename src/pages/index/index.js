import '../../css/index.css'
import MainApi from '../../js/api/MainApi';
import NewsApi from '../../js/api/NewsApi';
import Form from '../../js/components/Form.js';
import Popup from "../../js/components/Popup.js";
import Header from '../../js/components/Header.js';
import NewsCard from '../../js/components/NewsCard.js';
import NewsCardList from '../../js/components/NewsCardList.js';
import { SERVER_URL, NEWS_API_KEY, NEWS_API_URL } from '../../js/constants/constants';
import Search from '../../js/components/Search';

export const searchResults = document.querySelector('.search-results');
// инициализируем api

export const api = new MainApi(SERVER_URL);
export const newsApi = new NewsApi(NEWS_API_URL, NEWS_API_KEY);

// Формы
export const loginForm = document.querySelector(".popup__form_login");
export const regForm = document.querySelector(".popup__form_signup");
const searchForm = document.querySelector(".lead__search");


// экземпляры форм
export const loginFormInstance = new Form(loginForm);
export const regFormInstance = new Form(regForm);

// Кнопки для открытия попапа
export const authBtn = document.querySelector(".header__link_type_login");
export const mobileAuthBtn = document.querySelector(".header__auth-link_mobile");

// попапы
export const loginPopup = document.querySelector('.popup__login');
export const signupPopup = document.querySelector('.popup__signup');
export const successPopup = document.querySelector('.popup__signup-success');

// экземпляры попапов
export const loginPopupInstance = new Popup(loginPopup, loginFormInstance);
export const signupPopupInstance = new Popup(signupPopup, regFormInstance);
export const successPopupInstance = new Popup(successPopup, regFormInstance);

// кнопки выхода
export const logoutBtn = document.querySelector('.header__link_type_logout');
export const logoutBtnMobile = document.querySelector('.btn_type_logout');

// ссылки трансфера попапов
export const loginTransferLink = document.querySelector('.popup__link_reg');
export const signupTransferLink = document.querySelector('.popup__link_enter');
export const successTransferLink = document.querySelector('.popup__link_type_success');

// шапка
const headerElement = document.querySelector('header');
export const header = new Header(headerElement, api);

// статьи
const newArticle = (api) => new NewsCard(api);
export const newsCardInstance = new NewsCard(api);
export const articlesList = document.querySelector('.articles');
export const showMoreBtn = document.querySelector('.search-results__button');
export const newsCardList = new NewsCardList(articlesList, showMoreBtn, newArticle, api)


// элементы поиска новостей
export const notFound = document.querySelector(".not-found");
export const btn = document.querySelector('.search-results__button');
export const preloader = document.querySelector(".preloader");
const search = new Search(newsCardList, notFound, preloader, searchForm, newsApi);

// слушатели на открытие попапа логина
authBtn.addEventListener("click", () => loginPopupInstance.open());
mobileAuthBtn.addEventListener("click", () => loginPopupInstance.open());

// трансферы между попапами
loginTransferLink.addEventListener('click', (event) => { // переход к регистрации
  signupPopupInstance.transfer(event);
});
signupTransferLink.addEventListener('click', (event) => { // переход к логину
  loginPopupInstance.transfer(event);
});
successTransferLink.addEventListener('click', (event) => { // переход к логину из попапа успешной регистрации
  loginPopupInstance.transfer(event);
});

// Регистрация пользователя
regForm.addEventListener('submit', (event) => {
  event.preventDefault();
  api.signup(
    regForm.email.value,
    regForm.regPassword.value,
    regForm.name.value,
  )
    .then((res) => {
      if (res.message) {
        return regFormInstance.setServerError(res.message)
      }
      successPopupInstance.transfer(event);
    })
});
// вход пользователя
loginForm.addEventListener('submit', (event) => {
  event.preventDefault();
  api.signin(loginForm.email.value, loginForm.password.value)
    .then((res) => {
      if (res.message) {
        loginFormInstance.setServerError(res.message)
      } else {
        localStorage.setItem('token', res.jwt);
        loginPopupInstance.close();
        header.render();
      }
    })
})

// реализация логаута
logoutBtnMobile.addEventListener('click', () => {
  localStorage.clear();
  header.isLoggedIn();
});
logoutBtn.addEventListener('click', () => {
  localStorage.clear();
  header.render();
});
// function deleteCookie(name) {
//   setCookie(name, "", {
//     'max-age': -1
//   })
// }

// вызовы
search.setEventListeners();
loginFormInstance.setEventListeners();
regFormInstance.setEventListeners();
window.onload = header.render();
newsCardList.setEventListeners();
