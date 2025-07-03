const PRODUCT_LS_KEY = "basket";

const totalPrice = document.querySelector(".js-total-price");
const clear = document.querySelector(".js-clear");
const container = document.querySelector(".js-list");

let products = JSON.parse(localStorage.getItem(PRODUCT_LS_KEY)) || [];
let totalCost;
if (products.length) {
  clear.hidden = false;
  totalCost = products.reduce((acc, { price, qty }) => acc + price * qty, 0);
}

totalPrice.textContent = totalCost
  ? `Total cost ${totalCost} грн`
  : `Your bascet is empty`;

container.insertAdjacentHTML("beforeend", createMarkup(products));
clear.addEventListener("click", handleClear);
container.addEventListener("click", handleRemoveItem);

function handleClear() {
  localStorage.removeItem(PRODUCT_LS_KEY);
  window.location.href = "./03-shop.html"; // redirect
}

function handleRemoveItem(event) {
  const item = event.target.closest(".cart-item");
  if (!item) {
    return;
  }

  const idToDelete = Number(item.dataset.id);
  products = products.filter(({ id }) => id !== idToDelete); // без let
  localStorage.setItem(PRODUCT_LS_KEY, JSON.stringify(products));
  item.remove();
}

function createMarkup(arr) {
  return arr
    .map(
      ({ id, img, name, price, qty }) => `
  <li class="cart-item" data-id="${id}">
  <img src="${img}" alt="${name}"  class="product-img"/>
    <h2>${name}</h2>
    <p>Quntaty: ${qty}</p>
    <p>Total price: ${price * qty} грн.</p>
  </li>
    `
    )
    .join("");
}
