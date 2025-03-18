let totalAmount = 0;

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const itemName = this.getAttribute('data-name');
        const itemPrice = parseFloat(this.getAttribute('data-price'));
        
        totalAmount += itemPrice;
        document.getElementById('total').innerText = `Total: ${totalAmount} €`;
        
        // Retrieve the cart from local storage or initialize it
        const cart = JSON.parse(localStorage.getItem('cart')) || {};
        
        // Update the cart with the new item
        if (cart[itemName]) {
            cart[itemName] += 1; // Increment quantity if item already exists
        } else {
            cart[itemName] = 1; // Add new item with quantity 1
        }
        
        // Save the updated cart back to local storage
        localStorage.setItem('cart', JSON.stringify(cart));
        
        console.log(`${itemName} ajouté au panier. Nouveau total: ${totalAmount} €`);
    });
});
