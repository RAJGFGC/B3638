import React from 'react'
import ProductCard from './ProductCard';

const products = [
    { id: 1, name: 'Masala Dosa', price: 40 },
    { id: 2, name: 'Idli', price: 20 },
    { id: 3, name: 'Vada', price: 30 },
    { id: 4, name: 'Pongal', price: 50 },
    { id: 5, name: 'Upma', price: 25 },
    { id: 6, name: 'Samosa', price: 35 },
    { id: 7, name: 'Chapati', price: 15 },
    { id: 8, name: 'Paratha', price: 45 },
    { id: 9, name: 'Biryani', price: 100 },
    { id: 10, name: 'Pulao', price: 80 },
    { id: 11, name: 'Tea', price: 10 },
];

function ProductList() {
    return (
        <div>
            <h2>Menu</h2>
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    )
}

export default ProductList