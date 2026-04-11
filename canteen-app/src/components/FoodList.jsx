import React, { useState } from 'react'
import FoodCard from './FoodCard';

function FoodList({ items, onAddToCart }) {

    return (
        <div>
            <h2 className='text-2xl font-bold mb-4 text-slate-800'>Menu</h2>
            {items.length === 0 ? (
                <p className='text-gray-600'>No food items found.</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {items.map((item) => (
                        <FoodCard key={item.id} item={item} onAddToCart={onAddToCart} />
                    ))}
                </div>
            )}
        </div>
    )
}

export default FoodList