document.addEventListener('DOMContentLoaded', () => {
    const categories = ['Electronics', 'Clothing', 'Accessories'];
    const products = [
        { id: 1, name: 'jeans', price: 1700, category: 'Clothing' },
        { id: 2, name: 'Headphones', price: 8500, category: 'Electronics' },
        { id: 3, name: 'Wireless Headphones', price: 5000, category: 'Electronics' },
        { id: 4, name: 'skirt(1)', price: 2300, category: 'Clothing' },
        { id: 5, name: 'skirt(2)', price: 2500, category: 'Clothing' },
        { id: 6, name: 'skirt(3)', price: 2300, category: 'Clothing' },
        { id: 7, name: 'Watch', price: 7000, category: 'Accessories' },
        { id: 8, name: 'parker pen', price: 500, category: 'Accessories' },
    ];

    if (document.getElementById('categories')) {
        const categoryContainer = document.getElementById('categories');
        categories.forEach(category => {
            const categoryDiv = document.createElement('div');
            categoryDiv.className = 'category';
            categoryDiv.innerHTML = `<h2>${category}</h2>`;
            categoryDiv.addEventListener('click', () => {
                window.location.href = `category.html?category=${category}`;
            });
            categoryContainer.appendChild(categoryDiv);
        });
    }

    if (document.getElementById('product-list')) {
        const urlParams = new URLSearchParams(window.location.search);
        const category = urlParams.get('category');
        const productList = document.getElementById('product-list');
        const filteredProducts = products.filter(product => product.category === category);

        filteredProducts.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.className = 'product';
            productDiv.innerHTML = `
                <img src="placeholder.png" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>${product.price}</p>
            `;
            productList.appendChild(productDiv);
        });

        const priceRange = document.getElementById('priceRange');
        const priceValue = document.getElementById('priceValue');
        priceRange.addEventListener('input', () => {
            priceValue.textContent = `₹${priceRange.value}`;
            const filteredProductsByPrice = filteredProducts.filter(product => product.price <= priceRange.value);
            productList.innerHTML = '';
            filteredProductsByPrice.forEach(product => {
                const productDiv = document.createElement('div');
                productDiv.className = 'product';
                productDiv.innerHTML = `
                    <img src="jeans1.jpg" alt="₹{Jeans bootcut}">
                    <h3>₹{Jeans boot cut}</h3>
                    <p>₹{7000}
                    <img src="Headphones.jpg" alt="₹{Headphones}">
                    <h3>₹{Boat Headphones}</h3>
                    <p>₹{8500}
                    <img src="headset.jpg" alt="₹{Headphones}">
                    <h3>₹{wireless Headphones}</h3>
                    <p>₹{5000}
                    <img src="skirt(1).jpg" alt="₹{skirt}">
                    <h3>₹{skirt}</h3>
                    <p>₹{2300}
                    <img src="skirt(2).jpg" alt="₹{skirt}">
                    <h3>₹{skirt}</h3>
                    <p>₹{2500}
                    <img src="skirt(3).jpg" alt="₹{skirt}">
                    <h3>₹{skirt}</h3>
                    <p>₹{2300}
                    <img src="watch.jpg" alt="₹{Watch}">
                    <h3>₹{Watch}</h3>
                    <p>₹{7000}
                    <img src="pen.jpg" alt="₹{pen}">
                    <h3>₹{parker pen}</h3>
                    <p>₹{500}
                    </p>
                `;
                productList.appendChild(productDiv);
            });
        });
    }
});
