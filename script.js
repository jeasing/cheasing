let count = 0;
const cartCountSpan = document.getElementById('cart-count');

function addToCart() {
    count++;
    cartCountSpan.innerText = count;
    
    // Simple animation effect for the number
    cartCountSpan.style.transform = "scale(1.5)";
    setTimeout(() => {
        cartCountSpan.style.transform = "scale(1)";
    }, 200);
    
    alert("Item added to your cart!");
}