if (document.querySelector(".contact-field")) {
  var contactLink = document.querySelector(".adress .btn");
  var contact = document.querySelector(".contact-field");
  var form = contact.querySelector("form");
  var letter = contact.querySelector("[name=letter]");
  var username = contact.querySelector("[name=username]");
  var email = contact.querySelector("[name=email]");
  var storageUsername = localStorage.getItem("username");
  var storageEmail = localStorage.getItem("email");
  var closeContact = form.querySelector(".modal-close");

  contactLink.addEventListener("click", function(event) {
    event.preventDefault();
    contact.classList.add("modal-content-show");
    if (storageEmail && storageUsername) {
      username.value = storageUsername;
      email.value = storageEmail;
      letter.focus();
    } else {
      username.focus();
    }
  });

  letter.addEventListener("focus", function() {
    letter.textContent = "";
  });

  letter.addEventListener("blur", function() {
    letter.textContent = "В свободной форме";
  });

  form.addEventListener("submit", function(event) {
    if (!letter.value || letter.value == "В свободной форме" || !username.value || !email.value) {
      event.preventDefault ();
      contact.classList.remove("modal-error");
      contact.offsetWidth = contact.offsetWidth;
      contact.classList.add("modal-error");
    } else {
        localStorage.setItem("username", username.value);
        localStorage.setItem("email", email.value);
    }
  });

  closeContact.addEventListener("click", function(event) {
    event.preventDefault();
    if (document.querySelector(".contact-field")) {
      contact.classList.remove("modal-content-show");
      contact.classList.remove("modal-error");
    }
  });

  window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
      if (contact.classList.contains("modal-content-show")) {
        contact.classList.remove("modal-content-show");
        contact.classList.remove("modal-error");
      }
    }
  });
};

if (document.querySelector(".cart-field")) {
  var cart = document.querySelector(".cart-field");
  var continueLink = document.querySelector(".field-actions .btn-white");
  var buyLink = document.querySelectorAll(".catalog-item-actions .btn-green"), index, link;
  var closeCart = cart.querySelector(".modal-close");

  for (index = 0; index < buyLink.length; index++) {
    link = buyLink[index];
    link.addEventListener("click", function(event) {
      event.preventDefault();
      cart.classList.add("modal-content-show");
    });
  }

  continueLink.addEventListener("click", function(event) {
    event.preventDefault();
    cart.classList.remove("modal-content-show");
  });

  closeCart.addEventListener("click", function(event) {
    event.preventDefault();
    if (document.querySelector(".cart-field")) {
      cart.classList.remove("modal-content-show");
    }
  });

  window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
      if (cart.classList.contains("modal-content-show")) {
        cart.classList.remove("modal-content-show");
      }
    }
  });
};

if (document.querySelector(".map")) {
  var map = document.querySelector(".big-map");
  var mapLink = document.querySelector(".small-map");
  var closeMap = map.querySelector(".modal-close");

  mapLink.addEventListener("click", function(event) {
    event.preventDefault();
    map.classList.add("modal-content-show");
  });

  closeMap.addEventListener("click", function(event) {
    event.preventDefault();
    if (document.querySelector(".map")) {
      map.classList.remove("modal-content-show");
    }
  });

  window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
      if (map.classList.contains("modal-content-show")) {
        map.classList.remove("modal-content-show");
      }
    }
  });
};

var searchInput = document.querySelector (".header-form-search input");
var searchLabel = document.querySelector (".header-form-search label");

searchInput.addEventListener("focus", function() {
    searchLabel.textContent = "";
    searchInput.style.color = "#000000";
});

searchInput.addEventListener("blur", function() {
  if (searchInput.value) {
    searchLabel.textContent = "";
    searchInput.style.color = "#ffffff";
  } else {
    searchLabel.textContent = "Поиск:";
  }
});

window.onload = function() {
  searchInput.value = "";
}





