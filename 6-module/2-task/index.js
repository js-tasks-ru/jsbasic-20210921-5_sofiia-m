export default class ProductCard {
  constructor(product) {
    this.product = product;
    this.elem = document.createElement("div");
    this.elem.classList.add("card");

    this.cardTop = document.createElement("div");
    this.renderCardTop();
    this.elem.append(this.cardTop);

    this.cardBody = document.createElement("div");
    this.renderCardBody();
    this.elem.append(this.cardBody);
  }

  renderCardTop() {
    this.cardTop.classList.add("card__top");

    let image = document.createElement("img")
    image.classList.add("card__image");
    image.src = "/assets/images/products/" + this.product.image;
    image.setAttribute("alt", "product");
    this.cardTop.append(image);

    let price = document.createElement("span");
    price.classList.add("card__price");
    price.innerHTML = "€" + this.product.price.toFixed(2);
    this.cardTop.append(price);
  }

  renderCardBody() {
    this.cardBody.classList.add('card__body');

    let title = document.createElement('div');
    title.classList.add('card__title');
    title.innerHTML = this.product.name;
    this.cardBody.append(title);

    let button = document.createElement('button');
    button.classList.add('card__button');
    button.setAttribute('type', "button");

    let buttonImage = document.createElement('img');
    buttonImage.src = '/assets/images/icons/plus-icon.svg';
    buttonImage.setAttribute('alt', 'icon')
    button.append(buttonImage);

    this.onClick(button);
    this.cardBody.append(button);
  }

  onClick(button) {
    button.addEventListener('click', () => {
      let customEvent = new CustomEvent("product-add", {
        detail: this.product.id,
        bubbles: true
      });
      button.dispatchEvent(customEvent);
    });
  }
}

