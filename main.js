
let products =
[
{   id:1,
    category:"woman",
    productName:"Tab Sleeve Single Breast Blazer",
    Image: "https://i.postimg.cc/VktKxb8r/56260373-800-800.png",
    Image2:"",
    price:"R599,00"
    
},
{   id:2,
    category:"woman",
    productName:"Ribbed Sleeveless Column Midi Dress",
    Image: "https://i.postimg.cc/RZcw47bt/54314325-800-800.png",
    Image2:"",
    price:"R299,00"

},
{   id:3,
    category:"Woman",
    productName:"Women's Chartreuse Melton Coat",
    Image: "https://i.postimg.cc/G2V25jsV/56258625-800-800.png",
    Image2:"",
    price:"R999"
},
{   id:4,
    category:"Man",
    productName:"Men's White Utility Vest",
    Image: "https://i.postimg.cc/MHTWqPhd/55935723-800-800.png",
    Image2:"",
    price:"R279,99"
},
{   id:5, 
    category:"Man",
    productName:"mens black blazer",
    Image: "https://i.postimg.cc/kX2nHHN5/56409516-800-800.png",
    Image2:"",
    price:"R2500"
},
{   id:6,
    category:"Man",
    productName:"Mens Orange windbraker",
    Image: "https://i.postimg.cc/Hx3YGDPr/56277519-800-800.png",
    Image2:"",
    price:"R999"
},
{   id:7,
    category:"Kids",
    productName:"Younger Girls Smart Pants",
    Image: "https://i.postimg.cc/DfMB9fRb/pink-kids.png",
    Image2:"",
    price:"R399"
},
{   id:8,
    category:"Kids",
    productName:"Older Boys Utility Puffer Jacket",
    Image: "https://i.postimg.cc/26fMskJD/RED-BOY.png",
    Image2:"",
    price:"R499"
},
]
let productList = JSON.parse(localStorage.getItem('products')) ?
JSON.parse(localStorage.getItem('products')) : 
JSON.parse( 
    localStorage.setItem("products", JSON.stringify(products)));
async function diplayClothes(){
    productList.forEach((products)=> {
        document.querySelector(".products-container").innerHTML +=
            `<div class="container ">
          <div class="card" style="width: 18rem; height:35rem">
        <img src="${products.Image}" class="card-img-top " style="height: 25rem; width:17.9rem;" >
        <div class="card-body">
        <h5 class="card-title">${products.productName}</h5>
     <p class="card-text">${products.price}</p>
     <div id="color-selector">
    <div class="color-swatch" style="background-color: black;"></div>
    <div class="color-swatch" style="background-color: pink;"></div>
    <div class="color-swatch" style="background-color: red;"></div>
  </div>
  <p id="product-details">No color selected.</p>
    <button class='btn btn-dark' style='border-radius: 0px;' onclick="openModal()">VIEW DETAILS</button>
  </div>  
  <div id="modal" class="modal">
  <div class="modal-content">
    <span class="modal-close" onclick="closeModal()">&times;</span>
    <img class="product-image" src="${products.Image}" alt="Product Image">
    <h2 class="product-title">${products.productName}</h2>
    <p class="product-description">${products.category}</p>
    <p class="product-price">${products.price}</p>
    <button class="btn btn-dark" onclick=addToCart()>ADD TO CART</button>
  </div>
</div>
        </div>
      </div>`;
    })
}
diplayClothes();
console.table(products);

// Get all color swatches
const colorSwatches = document.querySelectorAll('.color-swatch');

// Add click event listener to each color swatch
colorSwatches.forEach(function(swatch) {
  swatch.addEventListener('click', function() {
    const selectedColor = swatch.style.backgroundColor;
    document.getElementById('product-details').textContent = `Selected color: ${selectedColor}`;
  });
});

function openModal(index) {
    var selectedProduct = products[index];
    document.querySelector('#modal').style.display = 'block';
    document.querySelector('product-title').textContent = selectedProduct.productName;
    document.querySelector('product-description').textContent = selectedProduct.category;
    document.querySelector('product-price').textContent = selectedProduct.price;
  }

  // Close the modal
  function closeModal() {
    document.getElementById('modal').style.display = 'none';
  }

  function addToCart() {
   
    alert('Product added to cart!');
    closeModal();
  }
     
  










