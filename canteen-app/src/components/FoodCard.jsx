import React from 'react'

function FoodCard({ item, onAddToCart }) {
    return (
        <div className="bg-white rounded-lg shadow-md p-4">
            <img
                src={item.image}
                alt={item.name}
                className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-semibold">{item.name}</h3>
            <p className="text-gray-600">₹{item.price}</p>
            <button
                className="mt-4 w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition-colors"
                onClick={() => onAddToCart(item)}
            >
                Add to Cart
            </button>
        </div>
    )
}

export default FoodCard