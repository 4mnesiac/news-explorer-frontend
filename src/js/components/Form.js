import { ERROR_MESSAGES } from '../constants/constants';
import BaseComponent from './BaseComponent';

const validator = require('validator');

export default class Form extends BaseComponent {
  constructor(form) {
    super();
    this.form = form;
    this.errorMessages = ERROR_MESSAGES;
    this.inputs = [];
  }

  setEventListeners() {
    const inputs = Array.from(this.form.querySelectorAll("input"));
    this.inputs = inputs;
    const button = this.form.querySelector("button");
    this._setListeners([
      {
        element: this.form,
        event: 'input',
        callback: () => this._validateForm(inputs, button)
      },
      {
        element: this.form,
        event: 'input',
        callback: () => this._resetServerError(button)
      },
    ])
  }

  _validateInputElement(input) {
    const error = input.nextElementSibling;
    if (input.validity.valueMissing) {
      this._activateError(input, error);
      error.textContent = this.errorMessages.valueMissing;
      return false;
    }
    if (input.validity.tooShort || input.validity.tooLong) {
      this._activateError(input, error);
      error.textContent = input.type === 'password' ? this.errorMessages.tooShortPass : this.errorMessages.tooShortName;
      return false;
    }
    if (input.type === 'email' && !validator.isEmail(input.value)) {
      this._activateError(input, error);
      error.textContent = this.errorMessages.typeMismatch;
      return false;
    }
    this._resetError(input, error);
    return true;
  }

  _validateForm(inputs, button) {
    const isValidForm = inputs.reduce(
      (acc, input) => this._validateInputElement(input) && acc,
      true
    );
    this.setSubmitButtonState(isValidForm, button);
  }

  setSubmitButtonState(isValidForm, button) {
    if (isValidForm) {
      button.removeAttribute("disabled");
    } else {
      button.setAttribute("disabled", true);
    }
  }

  _activateError(input, error) {
    error.classList.add("popup__error_active");
    input.classList.add("popup__input_has-error");
  }

  _resetError(input, error) {
    input.classList.remove("popup__input_has-error");
    error.textContent = "";
    error.classList.remove("popup__error_active");
  }

  setServerError(message) {
    // добавляет форме ошибку сервера
    const button = this.form.querySelector('button');
    const serverError = this.form.querySelector('.popup__error_type_server-error');
    button.setAttribute('style', 'margin-top:9px;')
    serverError.classList.add('popup__error_active');
    serverError.setAttribute('style', 'margin-top:30px;text-align:center;');
    serverError.textContent = message;
  }

  _resetServerError(button) {
    button.setAttribute('style', 'margin-top: 39px;');
    button.previousElementSibling.classList.remove('popup__error_active');
    button.previousElementSibling.textContent = '';
  }

  clear() {
    this.form.querySelector('button').setAttribute("disabled", true);
    this.form.reset();
    this._resetServerError(this.form.querySelector('button'));
    this.inputs.forEach((input) => {
      const error = input.nextElementSibling;
      this._resetError(input, error);
    });
  }
}