import React from 'react'

function Header({ cartCount }) {
    return (
        <header className="header">
            <h2>My Store</h2>
            <div className='cart-box'> Cart: {cartCount}</div>
        </header>
    )
}

export default Header