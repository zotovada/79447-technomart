var contactLink = document.querySelector(".adress .btn");
var contact = document.querySelector(".contact-field");
var close = document.querySelector(".modal-close");
var form = contact.querySelector("form");
var letter = contact.querySelector("[name=letter]");
var buyLink = document.querySelector(".catalog-item-actions .btn-green");
var cart = document.querySelector(".cart-field");
var continueLink =document.querySelector(".field-actions .btn-white");

contactLink.addEventListener("click", function(event) {
event.preventDefault();
contact.classList.add("modal-content-show");
username.focus();
});

buyLink.addEventListener("click", function(event) {
event.preventDefault();
cart.classList.add("modal-content-show");
});

close.addEventListener("click", function(event) {
event.preventDefault();
contact.classList.remove("modal-content-show");
cart.classList.remove("modal-content-show");
});

continueLink.addEventListener("click", function(event) {
event.preventDefault();
cart.classList.remove("modal-content-show");
});

form.addEventListener("submit", function(event) {
if (!letter.value) {
event.preventDefault ();
console.log("Введите текст письма");
}
});

window.addEventListener("keydown", function(event) {
if (event.keyCode === 27) {
if (contact.classList.contains("modal-content-show")) {
contact.classList.remove("modal-content-show");
}
if (cart.classList.contains("modal-content-show")) {
cart.classList.remove("modal-content-show");
}
}
});
