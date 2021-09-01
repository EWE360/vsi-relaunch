// SLIDES ZITAT

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slidesZitatHide");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "flex";
}

// SLIDES JOURNAL

let slideJournalIndex = 1;
showJournalSlides(slideJournalIndex);

// Next/previous controls
function plusJournalSlides(n) {
  showJournalSlides((slideJournalIndex += n));
}

function showJournalSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slidesJournalHide");
  console.log("before", slideJournalIndex);
  if (n > slides.length) {
    slideJournalIndex = 1;
  }
  if (n < 1) {
    slideJournalIndex = slides.length + 1;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  console.log("after", slideJournalIndex);
  slides[slideJournalIndex].style.display = "flex";
  slides[slideJournalIndex - 1].style.display = "flex";
}
