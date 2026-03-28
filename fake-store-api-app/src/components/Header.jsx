import React from 'react'
// import { useContext } from 'react';
import { CartContext } from '../CartContext';
import HeaderCartLevel1 from './HeaderCartLevel1';

function Header() {
    // const { cart } = useContext(CartContext);
    return (
        <header className="header">
            <h2>My Store</h2>
            <HeaderCartLevel1 />
        </header>
    )
}

export default Header