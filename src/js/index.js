import '../css/mainpage.css'

// variables
const auth = document.querySelector(".header__link_type_login");
const mobileAuth = document.querySelector(".header__auth-link_mobile");
const popup = document.querySelector(".popup__login");
const closeBtn = Array.from(document.querySelectorAll(".popup__close"));
const savedNewsLink = document.querySelectorAll(".header__link");
const reg = document.querySelector(".popup__link_reg");
const regPopup = document.querySelector(".popup__signup");
const enter = document.querySelector(".popup__link_enter");
const bookmark = document.querySelectorAll(".article__mark_type_save");
const form = document.querySelector(".lead__search");
const submit = form.querySelector("button");
const preloader = document.querySelector(".preloader");
const notFound = document.querySelector(".not-found");
const loginForm = document.querySelector(".popup__form_login");
const regForm = document.querySelector(".popup__form_signup");
const loginInputs = Array.from(loginForm.querySelectorAll(".popup__input"));
const regInputs = Array.from(regForm.querySelectorAll(".popup__input"));
const inputs = loginInputs.concat(regInputs);
const articleText = Array.from(document.querySelectorAll(".article__text"));
const success = document.querySelector(".popup__signup-success");
const results = document.querySelector(".search-results");
const leadInput = form.querySelector("input");

// Functions
function activateError(input) {
  const error = input.nextElementSibling;
  error.classList.add("popup__error_active");
  error.textContent = "Неправильно заполнено поле";
  input.classList.add("popup__input_has-error");
}

function resetError(input) {
  const error = input.nextElementSibling;
  input.classList.remove("popup__input_has-error");
  error.textContent = "";
  error.classList.remove("popup__error_active");
}
function newsFinder() {
  if (leadInput.value === "show me more") {
    preloader.classList.add("hider");
    results.classList.remove("hider");
  } else {
    preloader.classList.add("hider");
    notFound.classList.remove("hider");
  }
}
function rewriteTooLongText() {
  let maxlength;
  if (window.screen.availWidth <= 820 && window.screen.availWidth > 475) {
    maxlength = 75;
  } else if (window.screen.availWidth <= 425) {
    maxlength = 110;
  } else {
    maxlength = 180;
  }
  articleText.forEach((el) => {
    const str = el.textContent;
    el.textContent = truncate(str, maxlength);
  });
}
function truncate(str, maxlength) {
  return str.length > maxlength ? str.slice(0, maxlength - 1) + "…" : str;
}

// Listeners
inputs.forEach((element) => {
  element.addEventListener("input", () => {
    if (!element.validity.valid) {
      activateError(element);
      return;
    }
    resetError(element);
  });
});
function mark() {
  Array.from(bookmark).forEach((element) => {
    element.addEventListener("click", () => {
      element.classList.toggle("article__mark_active");
    });
    if (window.screen.availWidth > 820) {
      element.addEventListener("mouseover", () => {
        element.previousElementSibling.classList.remove("hider");
        setTimeout(() => {
          element.previousElementSibling.classList.add("hider");
        }, 2000);
      });
    }
  });
}
mobileAuth.addEventListener("click", () => {
  popup.classList.add("popup_is-opened");
});
closeBtn.forEach((el) => {
  el.addEventListener("click", () => {
    el.closest(".popup").classList.remove("popup_is-opened");
  });
});

auth.addEventListener("click", () => {
  popup.classList.add("popup_is-opened");
  popup.querySelector("input").focus();
});
closeBtn.forEach((el) => {
  el.addEventListener("click", () => {
    el.closest(".popup").classList.remove("popup_is-opened");
  });
});

reg.addEventListener("click", () => {
  popup.classList.remove("popup_is-opened");
  regPopup.classList.add("popup_is-opened");
  regPopup.querySelector("input").focus();
});

enter.addEventListener("click", () => {
  regPopup.classList.remove("popup_is-opened");
  success.classList.add("popup_is-opened");
});

leadInput.addEventListener("input", () => {
  if (leadInput.value === "show me more") {
    leadInput.setAttribute("style", "color: green;");
  } else {
    leadInput.removeAttribute("style", "color: green;");
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!notFound.classList.contains("hider")) {
    notFound.classList.add("hider");
  }

  preloader.classList.remove("hider");
  setTimeout(newsFinder, 3000);
});

// calls

mark();
