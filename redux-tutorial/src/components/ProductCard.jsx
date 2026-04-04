import { useDispatch } from "react-redux"
import { addItem } from "../features/cart/cartSlice";

function ProductCard({ product }) {
    const dispatch = useDispatch();

    return (
        <div style={{ border: "1px solid #ddd", padding: "10px", marginBottom: "10px" }}>
            <h3>{product.name}</h3>
            <p>Price: ₹{product.price}</p>
            <button onClick={() => dispatch(addItem(product))}>Add to Cart</button>
        </div>
    )
}

export default ProductCard