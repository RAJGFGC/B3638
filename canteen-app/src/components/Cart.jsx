import React from 'react'
import OrderSummary from './OrderSummary';
import CartItem from './CartItem';

function Cart({ cart, dispatch, total }) {
    return (
        <div className='bg-white rounded-2xl shadow-md p-5 sticky top-4'>
            <h2 className='text-2xl font-bold mb-4'>Your Cart</h2>
            {cart.length === 0 ? (
                <p className='text-gray-600'>Your cart is empty.</p>
            ) : (
                <div className='space-y-4'>
                    {cart.map(item => (
                        <CartItem key={item.id} item={item} dispatch={dispatch} />
                    ))}
                </div>
            )}
            <OrderSummary total={total} dispatch={dispatch} cartLength={cart.length} />
        </div>
    );
}

export default Cart