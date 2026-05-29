let order = JSON.parse(localStorage.getItem("order"));

let box = document.getElementById("orderSummary");

if(order && order.length > 0){
  let total = 0;

  order.forEach(item => {
    total += item.price * item.qty;

    box.innerHTML += `
      <p>${item.name} x${item.qty} = ₹${item.price * item.qty}</p>
    `;
  });

  box.innerHTML += `<h2>Total Paid: ₹${total}</h2>`;
} else {
  box.innerHTML = "<p>No order found.</p>";
}