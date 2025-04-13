document.addEventListener('DOMContentLoaded', () => {
  const cartItemsContainer = document.getElementById('cart-items');
  const cartTotalDisplay = document.getElementById('cart-total');
  
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  function updateCart() {
    cartItemsContainer.innerHTML = '';
    let total = 0;
  
    if (cart.length === 0) {
      cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
      document.querySelector('.cart-actions').style.display = 'none';
    } else {
      document.querySelector('.cart-actions').style.display = 'block';
      cart.forEach((item, index) => {
        total += item.price * item.quantity;
  
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('cart-item');
        itemDiv.innerHTML = `
          <input type="checkbox" class="select-item" data-index="${index}" style="margin-right: 10px;" />
          <div class="item-info">
            <strong>${item.name}</strong><br>
            Price: ₱${item.price.toFixed(2)}
          </div>
          <div class="item-controls">
            <button class="decrease" data-index="${index}">-</button>
            <span>${item.quantity}</span>
            <button class="increase" data-index="${index}">+</button>
          </div>
        `;
        cartItemsContainer.appendChild(itemDiv);
      });
    }
  
    cartTotalDisplay.textContent = `Total: ₱${total.toFixed(2)}`;
    localStorage.setItem('cart', JSON.stringify(cart));
  }
  
  cartItemsContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('increase')) {
      const index = e.target.getAttribute('data-index');
      cart[index].quantity++;
      updateCart();
      showToast(`Increased quantity of ${cart[index].name}`, 'success');
    }
  
    if (e.target.classList.contains('decrease')) {
      const index = e.target.getAttribute('data-index');
      if (cart[index].quantity > 1) {
        cart[index].quantity--;
        updateCart();
        showToast(`Decreased quantity of ${cart[index].name}`, 'warning');
      } else {
        const removedItem = cart[index].name;
        cart.splice(index, 1);
        updateCart();
        showToast(`${removedItem} removed from cart`, 'error');
      }
    }
  });
  
  
    // Select All Checkbox
const selectAllCheckbox = document.getElementById('select-all');
const removeSelectedButton = document.getElementById('remove-selected');

selectAllCheckbox.addEventListener('change', () => {
  const itemCheckboxes = document.querySelectorAll('.select-item');
  itemCheckboxes.forEach(cb => cb.checked = selectAllCheckbox.checked);
});

// Remove Selected Items
removeSelectedButton.addEventListener('click', () => {
  const selectedCheckboxes = Array.from(document.querySelectorAll('.select-item'))
    .filter(cb => cb.checked);
  const selectedIndexes = selectedCheckboxes.map(cb => parseInt(cb.getAttribute('data-index')));

  const removedCount = selectedIndexes.length;

  // Remove selected items
  cart = cart.filter((_, index) => !selectedIndexes.includes(index));
  updateCart();

  if (removedCount > 0) {
    showToast(`${removedCount} item${removedCount > 1 ? 's' : ''} removed from cart.`);
  }
});


function showToast(message, type = 'success') {
  const toast = document.getElementById('toast');
  toast.className = `toast toast-${type}`;
  toast.innerHTML = getToastIcon(type) + message;
  toast.style.opacity = '1';
  toast.style.transform = 'translateX(-50%) translateY(0)';

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(-50%) translateY(20px)';
  }, 2500);
}

function getToastIcon(type) {
  switch (type) {
    case 'success':
      return '✅';
    case 'warning':
      return '⚠️';
    case 'error':
      return '❌';
    default:
      return 'ℹ️';
  }
}

  updateCart();
});
