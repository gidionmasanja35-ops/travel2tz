document.addEventListener("DOMContentLoaded", () => {
  const cardsWrapper = document.getElementById("cards-wrapper");
  const scrollLeftBtn = document.getElementById("scroll-left");
  const scrollRightBtn = document.getElementById("scroll-right");

  const firstCard = cardsWrapper.querySelector(".review-card");
  let scrollDistance = 0;

  if (firstCard) {
    scrollDistance = firstCard.offsetWidth + 30;
  } else {
    scrollDistance = 480;
  }

  const scroll = (direction) => {
    let currentScroll = cardsWrapper.scrollLeft;
    let newScroll = currentScroll + direction * scrollDistance;

    cardsWrapper.scrollTo({
      left: newScroll,
      behavior: "smooth",
    });
  };

  scrollLeftBtn.addEventListener("click", () => {
    scroll(-1);
  });

  scrollRightBtn.addEventListener("click", () => {
    scroll(1); // Scroll right (positive direction)
  });
});
