/*
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("hero-slides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}


*/

var slideIndex = 0;
showSlides();
var slides, dots;

// För knapparna
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
}

// OnClick för dotsen under slideshowen.
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
}

// för auto slideshow
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
  setTimeout(showSlides, 5000);
}

showSlides();
/*
const slider = document.querySelector(".hero");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const slides = document.querySelectorAll(".hero-slides");
const slideIcons = document.querySelectorAll(".slide-icon");
const numberOfSlides = slides.length;
var slidesNumber = 0;

// img slider next btn
nextBtn.addEventListener("click", function () {
  slides.forEach((slide) => {
    slides.classList.remove("active");
  });
  slideIcons.forEach((slideDot) => {
    slideIcons.classList.remove("active");
  });

  slidesNumber++;

  if (slidesNumber > numberOfSlides - 1) {
    slidesNumber = 0;
  }

  slides[slidesNumber].classList.add("active");
  slideDots[slidesNumber].classList.add("active");
});

// img slider prev btn
prevBtn.addEventListener("click", () => {
  slides.forEach((slide) => {
    slides.classList.remove("active");
  });
  slideIcons.forEach((slideIcon) => {
    slideIcons.classList.remove("active");
  });

  slidesNumber--;

  if (slidesNumber < 0) {
    slidesNumber = numberOfSlides - 1;
  }

  slides[slidesNumber].classList.add("active");
  slideIcons[slidesNumber].classList.add("active");
});

//image slider autoplay
var playSlider;

var repeater = () => {
  playSlider = setInterval(function () {
    slides.forEach((slide) => {
      slides.classList.remove("active");
    });
    slideIcons.forEach((slideIcon) => {
      slideIcons.classList.remove("active");
    });

    slidesNumber++;

    if (slidesNumber > numberOfSlides - 1) {
      slidesNumber = 0;
    }

    slides[slidesNumber].classList.add("active");
    slideIcons[slidesNumber].classList.add("active");
  }, 4000);
};
repeater();

// Stop the img auto play
slider.addEventListener("mouseover", () => {
  clearInterval(playSlider);
});

// Start the image slider autoplay again on mouseout
slider.addEventListener("mouseout", () => {
  repeater();
});
*/
