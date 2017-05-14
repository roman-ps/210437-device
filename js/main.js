var link = document.querySelector(".buttons-contacts");
var popup = document.querySelector(".popup");
var close = document.querySelector(".popup-close");
var login = popup.querySelector("[name=name]");
var email = popup.querySelector("[name=e-mail]");
var form = popup.querySelector("form");
var text = popup.querySelector("[name=text]");

link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("popup-show");
  login.focus();
});

close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("popup-show");
  popup.classList.remove("popup-error");
});

form.addEventListener("submit", function(event) {
  if (!login.value || !email.value || !text.value) {
    event.preventDefault();
    popup.classList.add("popup-error");
  }
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode == 27) {
    if (popup.classList.contains("popup-show")) {
      popup.classList.remove("popup-show");
    }
  }
});


var myMap;

ymaps.ready(init);

function init () {

    myMap = new ymaps.Map('map', {
        center: [55.68697956906804,37.52965449999998],
        zoom: 15
    }, {
        searchControlProvider: 'yandex#search'
    });
}
