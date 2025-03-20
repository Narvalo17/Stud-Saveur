// Function to initialize the cart
function initializeCart() {
    // Clear any existing items in the cart
    localStorage.setItem('cartItems', JSON.stringify([]));
}

// Call the initializeCart function when the page loads
window.onload = function() {
    initializeCart();
};
