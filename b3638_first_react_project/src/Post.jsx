import React from 'react'

function Post() {
    console.log("Render App");
    const name = "John Doe";
    return (
        <div>Post by {name}</div>
    )
}

export default Post