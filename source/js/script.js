// открытие/закрытие меню
var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.page-header__toggle');

navMain.classList.remove('main-nav--nojs');
navToggle.classList.add('page-header__toggle--opened');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
    navToggle.classList.add('page-header__toggle--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
    navToggle.classList.remove('page-header__toggle--opened');
  }
});

// модалки

var modalSuccess = document.querySelector(".modal--success");
var modalError = document.querySelector(".modal--error");
var modalClose = document.querySelector(".modal__btn");
var modal = document.querySelector(".modal");
var surname = document.querySelector("[name=surname]");
var name = document.querySelector("[name=name]");
var email = document.querySelector("[name=email]");
var form = document.querySelector(".contest__form");



form.addEventListener("submit", function (evt) {
  if (!surname.value || !name.value || !email.value) {
    evt.preventDefault();
    modalError.classList.add("modal__error-show");
  } else {
    evt.preventDefault();
    modalSuccess.classList.add("modal__success-show");
  }
});


modalClose.addEventListener("click", function () {
  modal.classList.remove("modal__error-show");
  modal.classList.remove("modal__success-show");
});
