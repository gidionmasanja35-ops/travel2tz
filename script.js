// This file is optional for the basic functionality,
// as the Bootstrap JS handles the carousel.

// Example of how you would listen for a slide change:

document.addEventListener("DOMContentLoaded", function () {
  const customCarousel = document.getElementById("customCarousel");
  if (customCarousel) {
    customCarousel.addEventListener("slid.bs.carousel", function (event) {
      console.log("Slide has changed to: ", event.to);
    });
  }
});
