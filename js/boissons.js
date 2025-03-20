// JavaScript enhancements for the Boissons page

function showCategory(category) {
    const sections = document.querySelectorAll('.drink-section');
    sections.forEach(section => {
        section.style.display = 'none'; // Hide all sections
    });
    document.getElementById(category).style.display = 'flex'; // Show selected category
}

function addToCart(itemName, itemImage, itemPrice) {
    const quantityInput = event.target.previousElementSibling; // Get the quantity input
    const quantity = parseInt(quantityInput.value); // Get the quantity value

    // Validate quantity
    if (isNaN(quantity) || quantity < 1) {
        alert("Veuillez entrer une quantité valide (au moins 1).");
        return; // Exit the function if the quantity is invalid
    }

    // Retrieve the cart from local storage or initialize it
    const cart = JSON.parse(localStorage.getItem('cart')) || {};

    // Update the cart with the new item and quantity
    const itemDetails = {
        image: itemImage,
        price: itemPrice,
        quantity: quantity
    };
    if (cart[itemName]) {
        cart[itemName].quantity += quantity; // Increment quantity if item already exists
    } else {
        cart[itemName] = itemDetails; // Add new item
    }

    // Save the updated cart back to local storage
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(quantity + ' x ' + itemName + ' a été ajouté au panier avec succès!');
}
