// Product data
let products = [
  {
    id: 1,
    category: "woman",
    productName: "Tab Sleeve Single Breast Blazer",
    Image: "https://i.postimg.cc/VktKxb8r/56260373-800-800.png",
    Image2: "",
    price: "R599,00"
  },
  {
    id: 2,
    category: "woman",
    productName: "Ribbed Sleeveless Column Midi Dress",
    Image: "https://i.postimg.cc/RZcw47bt/54314325-800-800.png",
    Image2: "",
    price: "R299,00"
  },
  {
    id: 3,
    category: "Woman",
    productName: "Women's Chartreuse Melton Coat",
    Image: "https://i.postimg.cc/G2V25jsV/56258625-800-800.png",
    Image2: "",
    price: "R999"
  },
  {
    id: 4,
    category: "Man",
    productName: "Men's White Utility Vest",
    Image: "https://i.postimg.cc/MHTWqPhd/55935723-800-800.png",
    Image2: "",
    price: "R279,99"
  },
  {
    id: 5,
    category: "Man",
    productName: "mens black blazer",
    Image: "https://i.postimg.cc/kX2nHHN5/56409516-800-800.png",
    Image2: "",
    price: "R2500"
  },
  {
    id: 6,
    category: "Man",
    productName: "Mens Orange windbreaker",
    Image: "https://i.postimg.cc/Hx3YGDPr/56277519-800-800.png",
    Image2: "",
    price: "R999"
  },
  {
    id: 7,
    category: "Kids",
    productName: "Younger Girls Smart Pants",
    Image: "https://i.postimg.cc/DfMB9fRb/pink-kids.png",
    Image2: "",
    price: "R399"
  },
  {
    id: 8,
    category: "Kids",
    productName: "Older Boys Utility Puffer Jacket",
    Image: "https://i.postimg.cc/26fMskJD/RED-BOY.png",
    Image2: "",
    price: "R499"
  }
];

// Get products from localStorage or initialize with default data
let productList = JSON.parse(localStorage.getItem('products')) ?
  JSON.parse(localStorage.getItem('products')) :
  JSON.parse(localStorage.setItem("products", JSON.stringify(products)));

// Display clothes on the page
async function displayClothes() {
  const productsContainer = document.querySelector(".products-container");
  
  productList.forEach((product) => {
    productsContainer.innerHTML += `
      <div class="container">
        <div class="card" style="width: 18rem; height:35rem">
          <img src="${product.Image}" class="card-img-top" style="height: 25rem; width:17.9rem;">
          <div class="card-body">
            <h5 class="card-title">${product.productName}</h5>
            <p class="card-text">${product.price}</p>
            <div id="color-selector">
              <div class="color-swatch" style="background-color: black;"></div>
              <div class="color-swatch" style="background-color: pink;"></div>
              <div class="color-swatch" style="background-color: red;"></div>
            </div>
            <p id="product-details">No color selected.</p>
            <button class='btn btn-dark' style='border-radius: 0px;' onclick="openModal(${product.id})">VIEW DETAILS</button>
          </div>  
          <div id="modal" class="modal">
            <div class="modal-content">
              <span class="modal-close" onclick="closeModal()">&times;</span>
              <img class="product-image" src="${product.Image}" alt="Product Image">
              <h2 class="product-title">${product.productName}</h2>
              <p class="product-description">${product.category}</p>
              <p class="product-price">${product.price}</p>
              <button class="btn btn-dark" onclick="addToCart(${product.id})">ADD TO CART</button>
            </div>
          </div>
        </div>
      </div>`;
  });
}

// Call displayClothes initially to show all products
displayClothes();

// Filter products by category
let selectedCategory = '';

// Function to filter products based on the selected category
function filterProducts(category) {
  selectedCategory = category;
  displayFilteredProducts();
}

// Function to display filtered products
function displayFilteredProducts() {
  const productsContainer = document.querySelector(".products-container");
  productsContainer.innerHTML = '';

  productList.forEach((product) => {
    if (selectedCategory === '' || product.category.toLowerCase() === selectedCategory.toLowerCase()) {
      productsContainer.innerHTML += `
        <div class="container">
          <div class="card" style="width: 18rem; height:35rem">
            <img src="${product.Image}" class="card-img-top" style="height: 25rem; width:17.9rem;">
            <div class="card-body">
              <h5 class="card-title">${product.productName}</h5>
              <p class="card-text">${product.price}</p>
              <div id="color-selector">
                <div class="color-swatch" style="background-color: black;"></div>
                <div class="color-swatch" style="background-color: pink;"></div>
                <div class="color-swatch" style="background-color: red;"></div>
              </div>
              <p id="product-details">No color selected.</p>
              <button class='btn btn-dark' style='border-radius: 0px;' onclick="openModal(${product.id})">VIEW DETAILS</button>
            </div>  
            <div id="modal" class="modal">
              <div class="modal-content">
                <span class="modal-close" onclick="closeModal()">&times;</span>
                <img class="product-image" src="${product.Image}" alt="Product Image">
                <h2 class="product-title">${product.productName}</h2>
                <p class="product-description">${product.category}</p>
                <p class="product-price">${product.price}</p>
                <button class="btn btn-dark" onclick="addToCart(productId)">ADD TO CART</button>
              </div>
            </div>
          </div>
        </div>`;
    }
  });
}

// Get all color swatches
const colorSwatches = document.querySelectorAll('.color-swatch');

// Add click event listener to each color swatch
colorSwatches.forEach(function(swatch) {
  swatch.addEventListener('click', function() {
    const selectedColor = swatch.style.backgroundColor;
    document.getElementById('product-details').textContent = `Color selected: ${selectedColor}`;
  });
});

// Cart functionality
let cartItems = [];

// Function to update the cart display
function updateCartDisplay() {
  let cartItemsElement = document.getElementById('cart-items');
  cartItemsElement.innerHTML = '';

  cartItems.forEach(function(item) {
    let cartItemElement = document.createElement('li');
    cartItemElement.classList.add('cart-item');
    cartItemElement.innerHTML = `
      <div>
        <span>${item.name}</span>
        <span>Price: R${item.price}</span>
      </div>
      <button onclick="removeFromCart(${item.id})">Remove</button>
    `;
    cartItemsElement.appendChild(cartItemElement);
  });
}

// Function to add an item to the cart
function addToCart(productId) {
  let product = productList.find(product => product.id === productId);
  let productInfo = {
    id: Date.now(),
    name: product.productName,
    price: product.price
  };
  cartItems.push(productInfo);
  updateCartDisplay();
  closeModal();
}

// Function to remove an item from the cart
function removeFromCart(itemId) {
  let index = cartItems.findIndex(item => item.id === itemId);

  if (index !== -1) {
    cartItems.splice(index, 1);
    updateCartDisplay();
  }
}

// Initial cart display
updateCartDisplay();

// Single product view
function openModal(id) {
  let selectedProduct = productList.find(product => product.id === id);
  document.querySelector('#modal').style.display = 'block';
  document.querySelector('.product-title').textContent = selectedProduct.productName;
  document.querySelector('.product-description').textContent = selectedProduct.category;
  document.querySelector('.product-price').textContent = selectedProduct.price;
}

// Close the modal
function closeModal() {
  document.getElementById('modal').style.display = 'none';
}

     
  










