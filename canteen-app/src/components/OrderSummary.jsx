import React from 'react'

function OrderSummary({ total, dispatch, cartLength }) {
    return (
        <div className='mt-6 border-t pt-4'>
            <div className='flex justify-between items-center text-lg font-bold'>
                <span>Total Items: {cartLength}</span>
                <span className='text-orange-600'>Total: ${total.toFixed(2)}</span>
            </div>

            <button
                disabled={cartLength === 0}
                onClick={() => {
                    alert("Order placed successfully!");
                    dispatch({ type: 'CLEAR_CART' });
                }}
                className={`mt-4 w-full py-2 bg-orange-600 text-white rounded ${cartLength === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-orange-700'}`}
            >
                Place Order
            </button>
        </div >
    )
}

export default OrderSummary