import { useSelector, useDispatch } from "react-redux";
import {
    increaseQty,
    decreaseQty,
    removeItem,
} from "../features/cart/cartSlice";

function Cart() {
    const items = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();

    return (
        <div style={{ marginTop: "30px" }}>
            <h2>Cart Items</h2>
            {items.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                items.map((item) => (
                    <div
                        key={item.id}
                        style={{
                            border: "1px solid #ddd",
                            padding: "10px",
                            marginBottom: "10px",
                        }}
                    >
                        <h3>{item.name}</h3>
                        <p>Price: ₹{item.price}</p>
                        <p>Quantity: {item.quantity}</p>
                        <button onClick={() => dispatch(increaseQty(item.id))}>
                            +
                        </button>
                        <button onClick={() => dispatch(decreaseQty(item.id))}>
                            -
                        </button>
                        <button onClick={() => dispatch(removeItem(item.id))}>
                            Remove
                        </button>
                    </div>
                ))
            )}
        </div>
    )
}

export default Cart