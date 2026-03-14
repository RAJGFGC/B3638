import React from 'react'

function Search() {
    // perform a task in between
    const handleChange = (event) => {
        // synthetic event
        console.log(event);

        // value of the input
        console.log(event.target.value);

    }

    return (
        <div>
            <label htmlFor="search">Search:</label>
            <input id="search" type="text" onChange={handleChange} />
        </div>
    )
}

export default Search