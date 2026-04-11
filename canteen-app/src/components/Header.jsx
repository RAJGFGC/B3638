import React from 'react'

function Header({ cartCount }) {
    return (
        <header className="bg-orange-500 text-white p-4 flex justify-between items-center">
            <h1 className="text-xl font-bold">Canteen App</h1>
            <div className="relative">
                <span className="text-lg">🛒</span>
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center">
                    {cartCount}
                </span>
            </div>
        </header>
    )
}

export default Header