"use strict"
// обьект корзины
const cart = {

    // добавляю товар в корзину
    addToCart(title, price, backetShop) {
        event.target.disabled = true;
        let cartData = cart.getCartData() || {};
        let parentBox = event.target.parentNode;
        let itemId = event.target.getAttribute("data-id");
        let itemTitle = parentBox.querySelector(title).innerHTML;
        let itemPrice = parentBox.querySelector(price).innerHTML;
        if (!cartData.hasOwnProperty(itemId)) {
            cartData[itemId] = [itemTitle, itemPrice, itemId];
        }
        if (!cart.setCartData(cartData)) {
            event.target.disabled = false;
        }
        backetShop.className = "cart show-cart";
        return false;
    },
    // удаляю товар из корзины
    deleteItemCart(cartCont) {
        let cartData = cart.getCartData();
        let itemId = event.target.getAttribute("data-order");
        delete cartData[itemId];
        cart.setCartData(cartData);
        cart.openCart(cartCont)
    },

    // добавляю события для удаления товара
    addEventCloseCart(cartCont) {
        const closeCart = document.querySelectorAll(".close-cart");
        closeCart.forEach(button => button.addEventListener("click", ()=>cart.deleteItemCart(cartCont)))
    },

    // получаю данные из хранилища
    getCartData() {
        return JSON.parse(localStorage.getItem("cart"));
    },

    // записываю данные с хранилища
    setCartData(o) {
        localStorage.setItem("cart", JSON.stringify(o));
        return false;
    },

    // открываю корзину
    openCart(cartCont) {
        let cartData = cart.getCartData(),
            totalItems = "";
        if (cartData !== null) {
            totalItems = "<table class='shopping_list'><tr><th class='title_product'>назва</th><th class='title_product'>ціна</th></tr>";
            for (let items in cartData) {
                totalItems += "<tr>";
                for (let i = 0; i < cartData[items].length - 1; i++) {
                    totalItems += "<td>" + cartData[items][i] + "</td>";
                }
                totalItems += `<td><button class="close-cart button delete_order" data-order = ${items}>Видалити</button></td></tr>`;
            }
            totalItems += `</table>`;
            cartCont.innerHTML = totalItems;
        } else {
            cartCont.innerHTML = "Ваш кошик пустий"
        }
        cart.addEventCloseCart(cartCont);
        return false;
    },


    // очистить корзинуу

    clearCart(cartCont) {
        localStorage.removeItem("cart");
        cartCont.innerHTML = "Ваш кошик пустий"
    }
}