import isLogged from "../utils/is-logged";

export default class Header {
  constructor(header, api) {
    this.api = api;
    this.header = header;
    this._props = {
      isLoggedIn: false,
      username: '',
    };
  }

  isLoggedIn() {
    //  проверка авторизации, записываем результат в _props
    if (isLogged()) {
      this._props.isLoggedIn = true;
      return true;
    }
    this._props.isLoggedIn = false;
    this._props.username = '';
    return false;
  }

  getUserName() {
    // запрашивает имя, отправляет на рендеринг шапки
    if (this._props.username) {
      return this._props.username;
    }
    this.api.getUserData()
      .then((data) => {
        this._props.username = data.name;
        this._renderLoggedIn(data.name);
        return data.name;
      })
      .catch((err) => err);
  }

  render() {
    // принимает запрос на рендер, проверяет логин
    // если залогинен, то делаем запрос на имя
    if (this.isLoggedIn()) {
      return this.getUserName();
    }
    // если нет, то рендерим

    this._renderLoggedOut();

  }
  _renderLoggedIn(username) {
    if (this.header.classList.contains('header_theme_light')) {
      this.header.querySelector('.header__link_type_logout').textContent = username;
      this.header.querySelector(".btn_type_logout").textContent = username;
      return;
    }
    // авторизован
    this.header.querySelector('.header__menu-item_saved').classList.remove('hider');
    this.header.querySelector(".header__link_type_login").parentElement.classList.add('hider');
    this.header.querySelector('.header__link_type_logout').parentElement.classList.remove('hider');
    this.header.querySelector('.header__link_type_logout').textContent = username;
    // мобильное меню
    this.header.querySelector(".header__auth-link_mobile").classList.add('hider');
    this.header.querySelector('.btn_type_logout').classList.remove('hider');
    this.header.querySelector(".header__auth-link_mobile").textContent = username;
    this.header.querySelector('.mobile-menu__link_saved').classList.remove('hider');
  }

  _renderLoggedOut() {
    this.header.querySelector('.header__menu-item_saved').classList.add('hider');
    this.header.querySelector(".header__link_type_login").parentElement.classList.remove('hider');
    this.header.querySelector('.header__link_type_logout').parentElement.classList.add('hider');
    this.header.querySelector(".header__link_type_login").textContent = 'Авторизоваться';
    // мобильное меню
    this.header.querySelector(".header__auth-link_mobile").classList.remove('hider');
    this.header.querySelector('.btn_type_logout').classList.add('hider');
    this.header.querySelector(".header__auth-link_mobile").textContent = 'Авторизоваться';
    this.header.querySelector('.mobile-menu__link_saved').classList.add('hider');
  }
}