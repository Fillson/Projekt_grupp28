var slideIndex = 0;
let autoSlideTimeout = 5000; //(Keeping timeout as variable is also a good idea)
showSlides();
var slides, dots, timerHandler;

// For the manual slideshow buttons.
function plusSlides(position) {
  slideIndex += position;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  } else if (slideIndex < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";

  // Resets the timer
  clearTimeout(timerHandler);
  // Starts the timer again
  timerHandler = setTimeout(showSlides, autoSlideTimeout);
}

// OnClick function for the dots below the slideshow.
function currentSlide(index) {
  if (index > slides.length) {
    index = 1;
  } else if (index < 1) {
    index = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[index - 1].style.display = "block";
  dots[index - 1].className += " active";

  // Resets the timer
  clearTimeout(timerHandler);
  // Starts the timer again
  timerHandler = setTimeout(showSlides, autoSlideTimeout);
}

// function for the automatic slideshow startsida
function showSlides() {
  var i;
  slides = document.getElementsByClassName("hero-slides");
  dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  timerHandler = setTimeout(showSlides, autoSlideTimeout);
}

// The function will reset the timer once the pause btn is clicked
function pauseSlide() {
  clearTimeout(timerHandler);
}

// The function will start the timer once the button is clicked
function playSlide() {
  timerHandler = setTimeout(showSlides, 500);
}
/*
// FUNKAR EJ JUST NU
// Carousell funktion för om oss sektion
const btnLeft = document.querySelector(".btn--left");
const btnRight = document.querySelector(".btn--right");
const carousellSlides = document.getElementsByClassName("carousell-Slides");
let carousellIndex = 1;
showCarousell(carousellIndex);

function changeSlides(n) {
  showCarousell((carousellIndex += n));
}

function showCarousell(n) {
  let i;
  if (n > carousellSlides.length) {
    carousellIndex = 1;
  }
  for (i = 0; i < carousellSlides.length; i++) {
    carousellSlides[i].style.display = "none";
  }
  carousellSlides[carousellIndex - 1].style.display = "block";
}
*/
