const text = document.querySelector(".nachhaltigkeit__wrapper-right p span");
const readMore = document.querySelector(".nachhaltigkeit__read-more");

readMore.addEventListener("click", toggleView);

function toggleView() {
  if (text.classList.contains("hide")) {
    text.classList.remove("hide");
    readMore.innerHTML =
      '<img src="img/arrow-yellow-right.svg" alt="" />' + "weniger lesen";
  } else {
    text.classList.add("hide");
    readMore.innerHTML =
      '<img src="img/arrow-yellow-right.svg" alt="" />' + "weiterlesen";
  }
}
