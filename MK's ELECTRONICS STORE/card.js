// Create the card element in JavaScript
const card = document.createElement('div');
card.classList.add('card');
card.id = 'card-details';

// Create the img element
const img = document.createElement('img');
img.src = './assets/demo product.png';
img.alt = '';
img.classList.add('img');

// Create the span element for product name
const productName = document.createElement('span');
productName.classList.add('product-name');
productName.id = 'product-name';
productName.innerText = 'Iphone XR';

// Create the paragraph element for price
const priceParagraph = document.createElement('p');
priceParagraph.innerHTML = 'R <span class="price">8520.99</span>';

// Create the button element
const addToCartButton = document.createElement('button');
addToCartButton.classList.add('addToCart');
addToCartButton.id = 'addToCart';
addToCartButton.innerText = 'Add to Cart';

// Append all elements to the card
card.appendChild(img);
card.appendChild(productName);
card.appendChild(priceParagraph);
card.appendChild(addToCartButton);

// Append the card to the document body or any other container element
document.body.appendChild(card);
