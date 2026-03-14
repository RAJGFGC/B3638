import React from 'react'

function CartSummary(props) {
    const { teaCount, coffeeCount, samosaCount, totalItems, totalAmount } = props;
    return (
        <div className='card summary-card'>
            <h2>Order Summary</h2>
            <p>Tea: {teaCount}</p>
            <p>Coffee: {coffeeCount}</p>
            <p>Samosa: {samosaCount}</p>

            <hr />
            <p>
                <strong>Total Items:</strong> {totalItems}
            </p>
            <p>
                <strong>Total Amount:</strong> {totalAmount}
            </p>
        </div>
    )
}

export default CartSummary