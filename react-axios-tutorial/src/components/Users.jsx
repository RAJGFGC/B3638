import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'

function Users() {

    const [post, setPost] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users').then((response) => {
            console.log(response.data);
            setPost(response.data);
        }).catch((error) => {
            console.log(error);
        });
    }, []);
    return (
        <div>
            <h1>Users</h1>
            {post.map((item, i) => {
                return (
                    <div key={i}>
                        <p>{item?.name}</p>
                    </div>
                );
            })}
        </div>
    )
}

export default Users