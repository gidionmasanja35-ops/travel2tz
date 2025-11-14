document.addEventListener("DOMContentLoaded", () => {
  // ** IMPORTANT: REPLACE THESE WITH YOUR ACTUAL IMAGE PATHS **
  const images = [
    "0d874436679577f060e7742315ddde53.jpg",
    "1fae591c21f6fb2d8176996e0f50d124.jpg",
    "9b131b2c824132bfcd4357275e2175c7.jpg",
    "serengeti.jpg",
  ];

  const backgroundElement = document.querySelector(".slideshow-background");
  let currentImageIndex = 0;
  const intervalTime = 6000; // Change image every 6 seconds (6000 milliseconds)

  // Function to change the background image
  function changeBackground() {
    // Increment the index, and loop back to 0 when it reaches the end of the array
    currentImageIndex = (currentImageIndex + 1) % images.length;

    // Update the CSS background-image property
    backgroundElement.style.backgroundImage = `url('${images[currentImageIndex]}')`;
  }

  // 1. Set the initial background image
  backgroundElement.style.backgroundImage = `url('${images[currentImageIndex]}')`;

  // 2. Start the slideshow timer
  setInterval(changeBackground, intervalTime);
});
