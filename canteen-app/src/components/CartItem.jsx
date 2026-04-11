import React from 'react'

function CartItem({ item, dispatch }) {
    return (
        <div className='flex gap-3 border-b border-slate-200 py-4'>
            <img src={item.image} alt={item.name} className='w-16 h-16 object-cover rounded' />
            <div className='flex-1'>
                <h3 className='font-semibold'>{item.name}</h3>
                <p className='text-sm text-gray-600'>${item.price.toFixed(2)}</p>
                <div className='flex items-center gap-2 mt-2'>
                    <button
                        onClick={() => dispatch({ type: 'DECREASE_QUANTITY', payload: item.id })}
                        className='px-2 py-1 bg-gray-200 rounded'
                    >
                        -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                        onClick={() => dispatch({ type: 'INCREASE_QUANTITY', payload: item.id })}
                        className='px-2 py-1 bg-gray-200 rounded'
                    >
                        +
                    </button>
                </div>
            </div>
            <button
                onClick={() => dispatch({ type: 'REMOVE_FROM_CART', payload: item.id })}
                className='text-red-500 hover:text-red-700'
            >
                Remove
            </button>
        </div>
    )
}

export default CartItem