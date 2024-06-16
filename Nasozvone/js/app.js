const products = [
  {
    name: "Название товара 1",
    description: "Описание товара 1",
    price: 100,
    image: "image1.jpg",
  },
  {
    name: "Название товара 2",
    description: "Описание товара 2",
    price: 150,
    image: "image2.jpg",
  },
];

// Функция для создания карточки товара
function createProductCard(product) {
  const card = document.createElement("div");
  card.classList.add("container__product");

  const image = document.createElement("img");
  image.src = product.image;
  image.alt = product.name;

  const title = document.createElement("h3");
  title.textContent = product.name;

  const desc = document.createElement("p");
  desc.textContent = product.description;

  const price = document.createElement("span");
  price.textContent = `Цена: $${product.price}`;

  card.appendChild(image);
  card.appendChild(title);
  card.appendChild(desc);
  card.appendChild(price);

  return card;
}

// Функция для добавления карточек товаров на страницу
function renderProducts() {
  const catalogElement = document.querySelector(".catalog");
  products.forEach((product) => {
    const card = createProductCard(product);
    catalogElement.appendChild(card);
  });
}

// Вызываем функцию для отображения карточек товаров
renderProducts();
