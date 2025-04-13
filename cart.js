document.addEventListener('DOMContentLoaded', function () {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const cartList = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');

    let totalPrice = 0;

    cartItems.forEach(item => {
        // Check if item contains price and quantity
        const itemTotal = item.price * item.quantity; // Multiply price by quantity for total

        const listItem = document.createElement('li');
        listItem.textContent = `${item.product} - ₱${itemTotal.toFixed(2)} (${item.quantity} pcs)`;
        cartList.appendChild(listItem);
        
        totalPrice += itemTotal; // Add item total to overall total
    });

    totalPriceElement.textContent = `Total: ₱${totalPrice.toFixed(2)}`;
});
