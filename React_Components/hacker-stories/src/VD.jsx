import { useState } from "react";

function VD() {
    const [count, setCount] = useState(0);

    console.log("Component rendered");

    return (
        <div>
            <h1>React Counter</h1>
            <h2>{count}</h2>

            <button onClick={() => setCount(count + 1)}>+1</button>
            <button onClick={() => setCount(count - 1)}>-1</button>

            <ul>
                {Array.from({ length: 5 }, (_, i) => (
                    <li key={i}>Item {i}</li>
                ))}
            </ul>
        </div>
    )
}

export default VD