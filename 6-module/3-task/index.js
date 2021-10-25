import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this.elem = createElement(
      "<div class=\"carousel\">\n" +
      "    <div class=\"carousel__arrow carousel__arrow_right\">\n" +
      "      <img src=\"/assets/images/icons/angle-icon.svg\" alt=\"icon\">\n" +
      "    </div>\n" +
      "    <div class=\"carousel__arrow carousel__arrow_left\">\n" +
      "      <img src=\"/assets/images/icons/angle-left-icon.svg\" alt=\"icon\">\n" +
      "    </div>" +
      "     <div class=\"carousel__inner\"></div>" +
      "    </div>"
    );

    for (const item of slides) {
      let slide = createElement(
        "<div class=\"carousel__slide\" data-id=" + item.id + ">\n" +
        "            <img src=\"/assets/images/carousel/" + item.image + "\" class=\"carousel__img\" alt=\"slide\">\n" +
        "            <div class=\"carousel__caption\">\n" +
        "              <span class=\"carousel__price\">€" + item.price.toFixed(2) + "</span>\n" +
        "              <div class=\"carousel__title\">" + item.name + "</div>\n" +
        "              <button type=\"button\" class=\"carousel__button\">\n" +
        "                <img src=\"/assets/images/icons/plus-icon.svg\" alt=\"icon\">\n" +
        "              </button>\n" +
        "            </div>\n" +
        "          </div>"
      );
      this.elem.querySelector(".carousel__inner").append(slide);
    }

    this.addEvents();
    this.initCarousel();
  }

  addEvents() {
    this.elem.addEventListener('click', (event) => {

      if (event.target.className === 'carousel__button') {
        let currentSlide = event.path.find(node => node.className === 'carousel__slide');
        let { id } = currentSlide.dataset;
        this.elem.dispatchEvent(new CustomEvent('product-add', {
          detail: id,
          bubbles: true
        }));
      }
    });
  }

  initCarousel() {
    let rightArrow = this.elem.querySelector(".carousel__arrow_right");
    let leftArrow = this.elem.querySelector(".carousel__arrow_left");
    let inner = this.elem.querySelector(".carousel__inner");
    let slide = this.elem.querySelector('.carousel__slide');
    let currentPosition = 0;

    if (currentPosition === 0) {
      leftArrow.style.display = "none";
    }

    rightArrow.addEventListener("click", evt => {
      let lastPosition = slide.offsetWidth * (this.slides.length - 1);
      currentPosition -= slide.offsetWidth;
      inner.style.transform = "translateX(" + currentPosition + "px)";
      hideButton(currentPosition, lastPosition);
    });

    leftArrow.addEventListener("click", evt => {
      let lastPosition = slide.offsetWidth * (this.slides.length - 1);
      currentPosition += slide.offsetWidth;
      inner.style.transform = "translateX(" + currentPosition + "px)";
      hideButton(currentPosition, lastPosition);
    });

    let hideButton = (current, last) => {
      if (current === 0) {
        leftArrow.style.display = 'none';
      } else if (Math.abs(current) === last) {
        rightArrow.style.display = 'none';
      } else {
        leftArrow.style.display = '';
        rightArrow.style.display = '';
      }
    };
  }
}
