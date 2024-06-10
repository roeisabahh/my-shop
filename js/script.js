document.addEventListener("DOMContentLoaded", function () {
    const productsContainer = document.getElementById('products-container');

    for (let i = 1; i <= 50; i++) {
        const product = document.createElement('div');
        product.classList.add('product');
        
        product.innerHTML = `
            <h2>Product ${i}</h2>
            <p>Price: $19.99</p>
            <p>Description: This is the description for Product ${i}.</p>
            <button>Add to Cart</button>
        `;
        
        productsContainer.appendChild(product);
    }
});