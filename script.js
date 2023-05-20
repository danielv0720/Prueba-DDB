let currentSlide = 0;

/* Redirection to another page */
const redirectToPage = () => {
  window.location.href =
    "https://www.nissan.es/vehiculos/nuevos-vehiculos/Xtrail.html?cid=ban_%eexpid!_%eaid!_%epid!_PYP_AFF_DES";
};

const sliderConsumption = document.querySelector(".slider-consumption");

/* It changes the visibility of the Consumption slider by Visible */
const showConsumptionSlide = () => {
  sliderConsumption.style.visibility = "visible";
};

/* It changes the hidden of the Consumption slider */
const hideConsumptionSlide = () => {
  sliderConsumption.style.visibility = "hidden";
};

/* Change to the next Slider*/
const startSlider = () => {
  const totalSlides = document.querySelectorAll(".slider-image");

  const slidersList = document.getElementById("sliders-list");
  slidersList.style.transform = `translateX(-${currentSlide * 300}px)`;

  /* Remove the text animation */
  const prevSlide = currentSlide - 1;

  if (prevSlide === -1) {
    slidersList.children[totalSlides.length - 1].children[0].classList.remove(
      "animate__fadeIn"
    );
  } else {
    slidersList.children[prevSlide].children[0].classList.remove(
      "animate__fadeIn"
    );
  }

  /* Add the text animation */
  slidersList.children[currentSlide].children[0].classList.add(
    "animate__fadeIn",
    "animate__delay-1s"
  );

  /* Update the current slide */
  if (currentSlide === totalSlides.length - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
};

startSlider();

/* Change the slide each 4 seconds */
setInterval(() => {
  startSlider();
}, 4000);

const discoverButton = document.getElementById("discover-button");
discoverButton.addEventListener("click", redirectToPage);

const seeConsumptionButton = document.getElementById("see-consumption-button");
seeConsumptionButton.addEventListener("click", showConsumptionSlide);

const closeButton = document.getElementById("close-button");
closeButton.addEventListener("click", hideConsumptionSlide);
