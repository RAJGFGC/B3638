import React from 'react'
import { useState, useEffect } from 'react'

// Mount (initial render) -> Update (re-render) -> Unmount (component removed from the DOM)

function Counter() {
    const [count, setCount] = useState(0);
    const [bool, setBool] = useState(false);

    useEffect(() => {
        console.log('Component Mounted - rendered for the first time');
        setCount(10);
    }, []);

    useEffect(() => {
        console.log('Component Updated - re-rendered');
    }, [count]);

    return (
        <div className='counter'>
            <button onClick={() => setBool(!bool)}>Re-Render</button>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <p>Count: {count}</p>
        </div>
    )
}

export default Counter