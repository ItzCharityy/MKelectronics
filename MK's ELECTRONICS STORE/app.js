

document.addEventListener('DOMContentLoaded', function () {

    // Create the card element in JavaScript
    const card = Card() ;
    let prod = document.getElementById('products');
    //const productCard = document.getElementById('card-details');
    let DATA  = [] ;
    var cartCount = 0;
    let ItemsInCart = [];
    fetch('./dataEntityDemo.json')
        .then(response => response.json())
        .then(data => {
            // Handle your JSON data here
            DATA = data ;
            console.log(DATA);
            appendToProd(data,card,prod,cartCount,ItemsInCart);
        })
        
        
        .catch(error => {
            console.error('Error fetching JSON:', error);
        });




   
    
    
    

        //Cart.innerText = cartCount;
   
});

function appendToProd(data,card,prod,cartCount,ItemsInCart){
    for (let i = 0; i < data.length; i++) {
        // Clone the card for each item in the data
        let copyCard = card.cloneNode(true);

        copyCard.querySelector('.product-name').innerText = data[i].name;
        copyCard.querySelector('.price').innerText = data[i].price;
        copyCard.querySelector('.img').src = data[i].pictureSRC;

        // Attach the event listener directly to the button inside the cloned card
        copyCard.querySelector('.addToCart').addEventListener('click', () => {
            

    const Cart = document.getElementById('cart-ID');
    const btnAddToCard = document.getElementById('addToCart');
            cartCount++;
            Cart.innerText = cartCount;

            // Rest of the code for adding to cart
            const productName = copyCard.querySelector('.product-name').innerText;
            const productPrice = parseFloat(copyCard.querySelector('.price').innerText.replace(',', ''));

            const product = {
                name: productName,
                price: productPrice,
                quantity: 1
            };

            ItemsInCart.push(product);

            console.log(ItemsInCart);
        });

        prod.appendChild(copyCard);
    }
    console.log(data);
}


function Card (){
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
    return card ;
}


