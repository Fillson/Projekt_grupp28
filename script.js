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
// function för Pause och Play knappar
function pauseAndPlaySlide() {
  const icon1 = document.querySelector(".pause-left ion-icon");
  const icon2 = document.querySelector(".pause-right ion-icon");

  if (icon1.name === "pause-outline") {
    icon1.name = "play-outline";
    icon2.name = "play-outline";
    clearTimeout(timerHandler);
  } else {
    icon1.name = "pause-outline";
    icon2.name = "pause-outline";
    timerHandler = setTimeout(showSlides, 500);
  }
}

// Carousell funktion för om oss sektion
const testimonialSlide = document.querySelector(".testimonial-slide");
const btnRight = document.querySelector(".btn--right");
const btnLeft = document.querySelector(".btn--left");
const desktop = window.matchMedia("(max-width: 1400px)");
const laptop = window.matchMedia("(max-width: 1023px)");
let x = 0;

btnRight.onclick = function () {
  console.log(testimonialSlide.offsetWidth);
  if (testimonialSlide.offsetWidth === 3600) {
    if (x > -2700) {
      x = x - 900;
      testimonialSlide.style.left = x + "px";
    }
  } else if (testimonialSlide.offsetWidth === 3200) {
    if (x > -2400) {
      x = x - 800;
      testimonialSlide.style.left = x + "px";
    }
  } else if (testimonialSlide.offsetWidth === 2400) {
    if (x > -1800) {
      x = x - 600;
      testimonialSlide.style.left = x + "px";
    }
  } else if (testimonialSlide.offsetWidth === 1600) {
    if (x > -1200) {
      x = x - 400;
      testimonialSlide.style.left = x + "px";
    }
  } else {
    if (x > -3600) {
      x = x - 1200;
      testimonialSlide.style.left = x + "px";
    }
  }
};

btnLeft.onclick = function () {
  if (testimonialSlide.offsetWidth === 3600) {
    if (x < 0) {
      x = x + 900;
      testimonialSlide.style.left = x + "px";
    }
  } else if (testimonialSlide.offsetWidth === 3200) {
    if (x < 0) {
      x = x + 800;
      testimonialSlide.style.left = x + "px";
    }
  } else if (testimonialSlide.offsetWidth === 2400) {
    if (x < 0) {
      x = x + 600;
      testimonialSlide.style.left = x + "px";
    }
  } else if (testimonialSlide.offsetWidth === 1600) {
    if (x < 0) {
      x = x + 400;
      testimonialSlide.style.left = x + "px";
    }
  } else {
    if (x < 0) {
      x = x + 1200;
      testimonialSlide.style.left = x + "px";
    }
  }
};

// Sticky navigation Main page
const sectionHeroEl = document.querySelector(".background-text");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "200px",
  }
);
obs.observe(sectionHeroEl);

// FULLSCREEN API

// Funktion som kollar för vilka element fullscreen körs på
function getFullscreenElement() {
  return (
    document.fullscreenElement ||
    document.webkitFullscreenElement ||
    document.mozFullscreenElement ||
    document.msFullscreenElement
  );
}

// Funktion för att toggla fullscreen beroende på om den är igång eller ej
function toggleFullscreen() {
  if (getFullscreenElement()) {
    document.exitFullscreen();
  } else {
    document
      .getElementById("om-oss-sektion")
      .requestFullscreen()
      .catch(console.log());
  }
}

// Funktionen körs om man trycker ner "Enter" tangenten.
document.addEventListener("keydown", function () {
  if (event.keyCode == 13) {
    toggleFullscreen();
  }
});

// Spara formulär data till JSON
const sparaData = function (ev) {
  ev.preventDefault();
  let person = {
    fullName: document.getElementById("fullName").value,
    email: document.getElementById("email").value,
    telephone: document.getElementById("telephone").value,
    message: document.getElementById("message").value,
  };
  document.querySelector("form").reset(); // Cleara formen
  console.log(person);

  // Spara till localStorage
  localStorage.setItem("minData", JSON.stringify(person));
};

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".btn-form").addEventListener("click", sparaData);
});

// Ladda formulär data från localStroge med JSON

function laddaData() {
  if (localStorage.getItem("minData") !== null) {
    let inputParse = JSON.parse(localStorage.getItem("minData"));
    $.each(inputParse, function (key, value) {
      console.log(key, value);
      let field = document.getElementById(key);
      field.value = value;
    });
  }
}
// Fyller formuläret med Datan från JSON när all DOM content har laddats.
document.addEventListener("DOMContentLoaded", laddaData);
