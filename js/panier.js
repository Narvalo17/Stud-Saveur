let totalAmount = 0;

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const itemName = this.getAttribute('data-name');
        const itemPrice = parseFloat(this.getAttribute('data-price'));
        const itemImage = this.getAttribute('data-image'); // Get the image path
        
        totalAmount += itemPrice;
        document.getElementById('total').innerText = `Total: ${totalAmount} €`;
        
        // Retrieve the cart from local storage or initialize it
        const cart = JSON.parse(localStorage.getItem('cart')) || {};
        
        // Update the cart with the new item
        if (cart[itemName]) {
            cart[itemName].quantity += 1; // Increment quantity if item already exists
        } else {
            cart[itemName] = { quantity: 1, imagePath: itemImage }; // Add new item with quantity 1 and image path
        }
        
        // Save the updated cart back to local storage
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartDisplay(); // Update the cart display after adding an item
        console.log(`${itemName} ajouté au panier. Nouveau total: ${totalAmount} €`);
    });
});

function removeFromCart(itemName) { 
    const cart = JSON.parse(localStorage.getItem('cart')) || {}; 
    if (cart[itemName]) { 
        delete cart[itemName]; // Remove the item from the cart 
        localStorage.setItem('cart', JSON.stringify(cart)); // Update local storage 
        updateCartDisplay(); // Refresh the cart display 
    } 
}

function updateCartDisplay() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = ''; // Clear existing items
    const cart = JSON.parse(localStorage.getItem('cart')) || {};
    let total = 0;

    // Loop through the cart items and display them
    for (const item in cart) {
        const quantity = cart[item].quantity;
        const price = getPrice(item); // Function to get the price of the item
        total += price * quantity;

        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <img src="../asset/${cart[item].imagePath}" alt="${item}">
            <p>${item}</p>
            <p>Prix: ${price}€</p>
            <p>Quantité: ${quantity}</p>
            <button class="remove-button" onclick="removeFromCart('${item}')">Retirer</button>
        `;
        cartItemsContainer.appendChild(cartItem);
    }

    // Display total price
    document.querySelector('h3').innerText = `Total: ${total}€`;
}
