interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
}

async function fetchProducts(): Promise<Product[]> {
    const response = await fetch('products.json'); // Tải dữ liệu từ tệp JSON
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
}

function displayProducts(products: Product[]) {
    const productList = document.getElementById('product-list');
    if (productList) {
        products.forEach(product => {
            const productItem = document.createElement('div');
            productItem.className = 'product-item';
            productItem.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>Giá: ${product.price.toLocaleString()} VNĐ</p>
            `;
            productList.appendChild(productItem);
        });
    }
}

displayProducts(products);