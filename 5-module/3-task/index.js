function initCarousel() {
  let rightArrow = document.querySelector(".carousel__arrow_right");
  let leftArrow = document.querySelector(".carousel__arrow_left");
  let inner = document.querySelector(".carousel__inner");
  let width = inner.offsetWidth;
  let slides = document.querySelectorAll(".carousel__slide");
  let position = 0;

  if (position === 0) {
    leftArrow.style.display = "none";
  }

  rightArrow.addEventListener("click", evt => {
    inner.style.transform = "translateX(-" + (width * (position + 1)) + "px)";
    position++;
    if (position > 0) {
      leftArrow.style.display = "";
    }
    if (position === slides.length - 1) {
      rightArrow.style.display = "none";
    }
  });

  leftArrow.addEventListener("click", evt => {
    inner.style.transform = "translateX(-" + (width * (position - 1)) + "px)";
    position--;
    if (position < slides.length - 1) {
      rightArrow.style.display = "";
    }
    if (position === 0) {
      leftArrow.style.display = "none";
    }
  });
}
