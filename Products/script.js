let cart = [];

function addToCart(product, price) {
    cart.push({ product, price });
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.product} - $${item.price.toFixed(2)}`;
        cartItems.appendChild(li);
        total += item.price;
    });

    document.getElementById('total').textContent = total.toFixed(2);
}
