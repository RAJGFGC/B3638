import { useSelector } from "react-redux"

function CartSummary() {
    const items = useSelector((state) => state.cart.items);

    const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    return (
        <div style={{ marginTop: "30px", padding: "10px", border: "1px solid green" }}>
            <h2>Cart Summary</h2>
            <p>Total Items: {totalItems}</p>
            <p>Total Price: ₹{totalPrice}</p>
        </div>
    )
}

export default CartSummary