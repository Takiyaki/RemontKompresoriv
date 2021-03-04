const filterOpen = document.getElementById("filter-open");
const modal = document.getElementById("modal-window");
const close = document.getElementById("close");

const openModal = () => {
    modal.className = "filter";
}
const closeModal = (modal) => {
    modal.className = "d-none";
}
close.addEventListener("click", closeModal.bind(this, modal));
filterOpen.addEventListener("click", openModal);


const d = document;
const itemBox = d.querySelectorAll(".product-list");
const cartCont = d.getElementById("cartCont");
const backetShop = d.getElementById("backetShop")
const clearCart = d.getElementById("clearCart")


itemBox.forEach(item => item.querySelector(".button").addEventListener("click", cart.addToCart.bind(this, ".product-title", ".price", backetShop)));
itemBox.forEach(item => item.querySelector(".button").addEventListener("click", cart.openCart.bind(this, cartCont)));
clearCart.addEventListener("click", cart.clearCart.bind(this, cartCont))


const closeBacketShop = d.getElementById("closeBacketShop");
closeBacketShop.addEventListener("click", closeModal.bind(this, backetShop));
const btnOpenCart = d.getElementById("btn-open-cart");
btnOpenCart.addEventListener("click", cart.openCart.bind(this, cartCont));