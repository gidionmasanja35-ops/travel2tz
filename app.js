document.addEventListener("DOMContentLoaded", () => {
  const sliderTrack = document.getElementById("slider-track");
  const prevBtn = document.getElementById("prev-activity-btn");
  const nextBtn = document.getElementById("next-activity-btn");
  const activityCards = document.querySelectorAll(".activity-card");

  let scrollDistance = 0;

  // --- 1. SLIDER FUNCTIONALITY (Card-by-Card Scrolling) ---

  const updateScrollDistance = () => {
    // Calculates the scroll distance based on the actual card width + gap
    const firstCard = sliderTrack.querySelector(".activity-card");
    if (firstCard) {
      // Card width (350px) + Gap (30px) as defined in CSS
      const cardWidth = firstCard.offsetWidth;
      const gap = 30;
      scrollDistance = cardWidth + gap;
    }
  };

  const updateButtonState = () => {
    // Disable prev button if scrolled to the start (0)
    prevBtn.disabled = sliderTrack.scrollLeft === 0;

    // Calculate the maximum scroll position
    const maxScroll = sliderTrack.scrollWidth - sliderTrack.clientWidth;

    // Disable next button if scrolled to the end (allow a small buffer of 5 pixels)
    nextBtn.disabled = sliderTrack.scrollLeft >= maxScroll - 5;
  };

  const scrollSlider = (direction) => {
    // Calculate new scroll position
    const newScroll = sliderTrack.scrollLeft + direction * scrollDistance;

    sliderTrack.scrollTo({
      left: newScroll,
      behavior: "smooth",
    });

    // Update button state shortly after initiating scroll
    setTimeout(updateButtonState, 500);
  };

  // Initialize slider properties and state
  updateScrollDistance();
  updateButtonState();

  // Event Listeners for button clicks
  prevBtn.addEventListener("click", () => scrollSlider(-1));
  nextBtn.addEventListener("click", () => scrollSlider(1));

  // Update button state when user manually scrolls (e.g., swiping on mobile)
  sliderTrack.addEventListener("scroll", updateButtonState);

  // Update distance and state on window resize (for responsiveness)
  window.addEventListener("resize", () => {
    updateScrollDistance();
    updateButtonState();
  });

  // --- 2. CARD FADE-IN ANIMATION ---

  const observerOptions = {
    root: null, // Use the viewport
    rootMargin: "0px",
    threshold: 0.1, // Trigger when 10% of the element is visible
  };

  const observerCallback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        // Stop observing once the animation is done
        observer.unobserve(entry.target);
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);

  activityCards.forEach((card) => {
    observer.observe(card);
  });
});
