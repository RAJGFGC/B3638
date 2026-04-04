import { useSelector } from "react-redux"

function Navbar() {
    const items = useSelector((state) => state.cart.items);

    const totalItems = items.reduce((total, item) => total + item.quantity, 0);

    return (
        <div style={{ marginBottom: "20px", padding: "10px", border: "1px solid #ccc" }}>
            <h2>Campus Canteen</h2>
            <p>Total Items in Cart: {totalItems}</p>
        </div>
    )
}

export default Navbar