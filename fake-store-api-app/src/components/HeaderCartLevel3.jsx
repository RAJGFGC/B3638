import React, { useContext } from 'react'
import { CartContext } from '../CartContext'

function HeaderCartLevel3() {
    const { cart } = useContext(CartContext);
    return (
        <div className='cart-box'> Cart: {cart.length}</div>
    )
}

export default HeaderCartLevel3