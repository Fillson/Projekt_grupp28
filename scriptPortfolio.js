document.addEventListener("DOMContentLoaded", function () {
  let url = "projekt.xml";
  fetch(url)
    .then((response) => response.text())
    .then((data) => {
      console.log(data);
      let parser = new DOMParser();
      let xml = parser.parseFromString(data, "application/xml");
      fillTable(xml);
    });
});

function fillTable(e) {
  let tableManagers = document.querySelector(".table-managers");
  let tableTitles = document.querySelector(".table-titles");
  let tableCustomers = document.querySelector(".table-customer");
  let tableStartDates = document.querySelector(".table-start-dates");
  let tableEndDates = document.querySelector(".table-end-dates");
  let tableImages = document.querySelector(".table-images");
  let tableDescriptions = document.querySelector(".table-descriptions");
  let managers = e.getElementsByTagName("manager");
  let titles = e.getElementsByTagName("title");
  let customers = e.getElementsByTagName("customer");
  let startDates = e.getElementsByTagName("startDate");
  let endDates = e.getElementsByTagName("endDate");
  let images = e.getElementsByTagName("image");
  let descriptions = e.getElementsByTagName("description");

  for (let i = 0; i < managers.length; i++) {
    let tr = document.createElement("tr");
    let manager = managers[i].firstChild.nodeValue;
    tr.textContent = manager;
    tableManagers.appendChild(tr);
  }

  for (let i = 0; i < titles.length; i++) {
    let tr = document.createElement("tr");
    let title = titles[i].firstChild.nodeValue;
    tr.textContent = title;
    tableTitles.appendChild(tr);
  }
  for (let i = 0; i < customers.length; i++) {
    let tr = document.createElement("tr");
    let customer = customers[i].firstChild.nodeValue;
    tr.textContent = customer;
    tableCustomers.appendChild(tr);
  }
  for (let i = 0; i < startDates.length; i++) {
    let tr = document.createElement("tr");
    let startDate = startDates[i].firstChild.nodeValue;
    tr.textContent = startDate;
    tableStartDates.appendChild(tr);
  }
  for (let i = 0; i < endDates.length; i++) {
    let tr = document.createElement("tr");
    let endDate = endDates[i].firstChild.nodeValue;
    tr.textContent = endDate;
    tableEndDates.appendChild(tr);
  }
  for (let i = 0; i < images.length; i++) {
    let tr = document.createElement("tr");
    let img = document.createElement("img");
    let image = images[i].firstChild.nodeValue;
    img.setAttribute("src", image);
    tr.appendChild(img);
    tableImages.appendChild(tr);
  }
  for (let i = 0; i < descriptions.length; i++) {
    let tr = document.createElement("tr");
    let description = descriptions[i].firstChild.nodeValue;
    tr.textContent = description;
    tableDescriptions.appendChild(tr);
  }
}

// Sticky navigation Main page
const sectionPortfolioEl = document.querySelector(".portfolio-heading");

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
    rootMargin: "-50px",
  }
);
obs.observe(sectionPortfolioEl);

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
      .getElementById("section-portfolio")
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
