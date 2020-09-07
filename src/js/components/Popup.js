import BaseComponent from './BaseComponent.js';

export default class Popup extends BaseComponent {
  constructor(popup, form) {
    super();
    this.popup = popup;
    this.form = form;
  }

  _closeHandler = () => this.close();

  _handleMousedown = (e) => {
    e.stopPropagation();
    if (e.target.classList.contains('popup')) {
      this.close();
    }
  }

  _handleKeydown = (e) => {
    if (e.code == 'Escape' && e.key == 'Escape') {
      this.close();
    }
  }

  transfer(event) {
    event.target.closest('.popup').classList.remove("popup_is-opened");
    this.form.clear();
    this.open();
  }

  _setEventListeners() {
    const closeButton = this.popup.querySelector(".popup__close");
    const root = document.querySelector('.root');
    this._setListeners([
      {
        element: closeButton,
        event: 'click',
        callback: this._closeHandler,
      },
      {
        element: document,
        event: 'mousedown',
        callback: this._handleMousedown,
      },
      {
        element: document,
        event: 'keydown',
        callback: this._handleKeydown,
      }
    ])
  }

  open() {
    this.popup.classList.add("popup_is-opened");
    this._setEventListeners();
  }

  close() {
    this.popup.classList.remove("popup_is-opened");
    this.form.clear();
    this.clearListeners();
  }
}

