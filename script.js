function toggleMenu(){
  const menu = document.getElementById("navLinks");

  if(menu.style.display === "flex"){
    menu.style.display = "none";
  } else {
    menu.style.display = "flex";
    menu.style.flexDirection = "column";
  }
}

let cart = [];

function addToCart(name, price){
  let item = cart.find(i => i.name === name);

  if(item){
    item.qty += 1;
  } else {
    cart.push({name, price, qty:1});
  }

  renderCart();
}

function renderCart(){
  let cartItems = document.getElementById("cartItems");
  let totalEl = document.getElementById("total");

  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach(item => {
    total += item.price * item.qty;

    cartItems.innerHTML += `
      <div class="cart-item">
        <span>${item.name} x${item.qty}</span>
        <span>₹${item.price * item.qty}</span>
      </div>
    `;
  });

  totalEl.innerText = total;
}

function placeOrder(){
  if(cart.length === 0){
    alert("Cart is empty!");
    return;
  }

  // SAVE ORDER
  localStorage.setItem("order", JSON.stringify(cart));

  // CLEAR CART
  cart = [];
  renderCart();

  // REDIRECT
  window.location.href = "confirmation.html";
}

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }
  });
});

document.querySelectorAll(".card, .about-box").forEach(el => {
  el.classList.add("hidden");
  observer.observe(el);
});
function addReview(){
  let name = document.getElementById("name").value;
  let rating = document.getElementById("rating").value;
  let comment = document.getElementById("comment").value;

  if(name === "" || comment === ""){
    alert("Please fill all fields");
    return;
  }

  let reviewList = document.getElementById("reviewList");

  reviewList.innerHTML += `
    <div class="review-card">
      <h3>${name}</h3>
      <p>Rating: ${"⭐".repeat(rating)}</p>
      <p>${comment}</p>
    </div>
  `;

  document.getElementById("name").value = "";
  document.getElementById("comment").value = "";
}