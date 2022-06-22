const productContainer = document.querySelector(".product-Contents-Box");
const form = document.getElementById("tagSearch");
const searchTag = document.querySelector('.searchInput');
const btnTag = document.getElementById("tags-submit");
const clearTag = document.getElementById("tags-clear");
const aleTag = document.querySelector('.tagsAleBtn');
const lagerTag = document.querySelector('.tagsLagerBtn');
var modal = document.getElementById("myModal");
var btn = document.getElementById("newsletter-SubmitButton");
var span = document.getElementsByClassName("close")[0];

let productBox = "";



window.onload = function() {
   document.getElementById("mySearchInput").addEventListener("keyup", mySearchFunction);
   mySearchFunction();
   
}


// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";

  };
};


  

document.getElementById("eventForm").addEventListener("submit", myEventFunction);
//EVENTS PAGE
function myEventFunction(e) {
  
  e.preventDefault();
  const form = document.getElementById("eventForm")
  const message = document.getElementById("succesMessage")

  form.style.display = "none"; 
  message.style.display = "block";
  
  setTimeout(function() {
    message.style.display = "none";
    form.style.display = "block"
  }, "5000") //5sec  
  document.getElementById("eventForm").reset();
  return;
}

function mySearchFunction(){
  productContainer.innerHTML="";
  for( const product of products){
    productBox = `
      <div class="box-Product"  id="productBox">
        <img style="width: 100px; height: auto;" src="${product.image}" class="box-Product-Image" id="productBoxImage"><br>
        <p class="box-Product-Name" id="productBoxName">${product.name}</p>
        <p class="box-Product-Description" id="productBoxDescription">${product.subtype}</p><br>
        <p class="box-Product-Price" id="productBoxPrice">${product.price}</p>
      </div>
      <div id="myBeerModal" class="modalBeer">
        <!-- Modal content -->
        <div class="modal-Beer-Content">
          <span class="closeBeerModal">&times;</span>
            <div id="modal-Beer-Text-Box" >
                <p>Thanks for subscribing to our fancy newsletter!</p>
            </div>
        </div>      
    </div>
    `;
    productContainer.insertAdjacentHTML("beforeend", productBox);
  };


  var input, filter, li, a, i, txtValue;
  input = document.getElementById("mySearchInput");
  filter = input.value.toUpperCase();
  
  li = document.getElementsByClassName("box-Product");
  for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByClassName("box-Product-Name")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
          li[i].style.display = "";
      } else {
          li[i].style.display = "none";
      }
  }
  
aleTag.onclick = function(d) {
  d.preventDefault();
  productContainer.innerHTML="";
  for( const product of products){
    if( product.type == String('Ale')){
    productBox = `
    <div class="box-Product" id="productBox">
      <img style="width: 100px; height: auto;" src="${product.image}" class="box-Product-Image" id="productBoxImage"><br>
      <p class="box-Product-Name" id="productBoxName">${product.name}</p>
      <p class="box-Product-Description" id="productBoxDescription">${product.subtype}</p><br>
      <p class="box-Product-Price" id="productBoxPrice">${product.price}</p>
    </div>
    `;
    productContainer.insertAdjacentHTML("beforeend", productBox);
}}};

lagerTag.onclick = function(d) {
d.preventDefault();
productContainer.innerHTML="";
for( const product of products){
  if( product.type == String('Lager')){
  productBox = `
  <div class="box-Product" id="productBox">
    <img style="width: 100px; height: auto;" src="${product.image}" class="box-Product-Image" id="productBoxImage"><br>
    <p class="box-Product-Name" id="productBoxName">${product.name}</p>
    <p class="box-Product-Description" id="productBoxDescription">${product.subtype}</p><br>
    <p class="box-Product-Price" id="productBoxPrice">${product.price}</p>
  </div>
  `;
  productContainer.insertAdjacentHTML("beforeend", productBox);
}}};

};
