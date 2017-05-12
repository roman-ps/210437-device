var link = document.querySelector(".buttons-contacts");
var popup = document.querySelector(".popup");
var close = document.querySelector(".popup-close");

link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("popup-show");
});

close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("popup-show");
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode == 27) {
    if (popup.classList.contains("popup-show")) {
      popup.classList.remove("popup-show");
    }
  }
});
