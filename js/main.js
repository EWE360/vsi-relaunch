const text = document.querySelector(".nachhaltigkeit__wrapper-right p span");
const readMore = document.querySelector(".nachhaltigkeit__read-more");
const rwLink = document.querySelector(".navigation__bottom li:nth-child(4)");
const newsLink = document.querySelector(".navigation__bottom li:nth-child(5)");
const rwContent = document.querySelector(".teaser__regelwerke-menu");
const newsContent = document.querySelector(".teaser__news-menu");
const menuNotRegelwerke = document.querySelectorAll(
  ".navigation__bottom li:not(:nth-child(4))"
);
const menuNotNews = document.querySelectorAll(
  ".navigation__bottom li:not(:nth-child(5))"
);

readMore.addEventListener("click", toggleView);
rwLink.addEventListener("mouseover", showRegelwerke);
newsLink.addEventListener("mouseover", showNews);

menuNotRegelwerke.forEach((item) => {
  item.removeEventListener("mouseover", hideMenu);
  item.addEventListener("mouseover", hideMenu);
});

menuNotNews.forEach((item) => {
  item.removeEventListener("mouseover", hideMenu2);
  item.addEventListener("mouseover", hideMenu2);
});

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

function showRegelwerke() {
  rwContent.classList.remove("hide");
}

function showNews() {
  newsContent.classList.remove("hide");
}

document.onclick = function hideRegelwerke() {
  rwContent.classList.add("hide");
  newsContent.classList.add("hide");
};

function hideMenu() {
  rwContent.classList.add("hide");
}

function hideMenu2() {
  newsContent.classList.add("hide");
}
