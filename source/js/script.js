var navMain = document.querySelector(".site-nav");
var navToggle = navMain.querySelector(".site-nav__toggle");

navMain.classList.remove("site-nav--nojs");

navToggle.classList.add("site-nav--closed");
navToggle.classList.remove("site-nav--opened");
navMain.classList.add("site-nav--closed");
navMain.classList.remove("site-nav--opened");


navToggle.addEventListener("click", function() {
  if (navMain.classList.contains("site-nav--closed")) {
    navMain.classList.remove("site-nav--closed");
    navMain.classList.add("site-nav--opened");
  } else {
    navMain.classList.add("site-nav--closed");
    navMain.classList.remove("site-nav--opened");
  }
});

const nameRegEx = /[^А-Я,а-я,a-z,A-Z,ё,Ё," ",-]/;
const mailRegEx = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;


const form = document.querySelector(".information");
const formSubmitBtn = document.querySelector(".information button[type='submit']");
const emailInput = document.querySelector("input[type='email']");
const telInput = document.querySelector("input[type='tel']");
const nameInput = document.querySelector("input[name='Имя']");
const weightInput = document.querySelector("input[name='weight']");

if (form) {

nameInput.addEventListener("input", () => {
nameInput.value = nameInput.value.replace(nameRegEx, );
});

formSubmitBtn.addEventListener("click", (evt) => {
document.activeElement.blur();

if (!mailRegEx.test(emailInput.value)) {
emailInput.classList.add("information-details__input--invalid");
} else {
emailInput.classList.add("information-details__input--valid");
}
if (!nameInput.checkValidity()) {
nameInput.classList.add("information-details__input--invalid")
} else {
nameInput.classList.add("information-details__input--valid")
}
if (!telInput.checkValidity()) {
telInput.classList.add("information-details__input--invalid")
} else {
telInput.classList.add("information-details__input--valid")
}
if (!weightInput.checkValidity()) {
weightInput.classList.add("information-details__input--invalid")
} else {
weightInput.classList.add("information-details__input--valid")
}
})
}
