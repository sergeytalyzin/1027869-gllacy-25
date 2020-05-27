var feedback = document.querySelector(".button-feedback");
var popup = document.querySelector(".modal-feedback-open");
var close = document.querySelector(".feedback-close");
var login = document.querySelector(".nick");
var form = document.querySelector(".feedback-open");
var email = document.querySelector(".mail");
var textarea = document.querySelector(".textarea");

feedback.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
});
close.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  email.classList.remove("input-error");
  login.classList.remove("input-error");
  textarea.classList.remove("input-error");
  popup.classList.remove("modal-error");

});

form.addEventListener("submit", function(evt) {
  if (!login.value || !email.value || !textarea.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");


    if (!login.value) {
      login.classList.add("input-error");
    } else {
      login.classList.remove("input-error");
    }
    if (!email.value) {
      email.classList.add("input-error");
    } else {
      email.classList.remove("input-error");
    }
    if (!textarea.value) {
      textarea.classList.add("input-error");
    } else {
      textarea.classList.remove("input-error");
    }
  }
});
