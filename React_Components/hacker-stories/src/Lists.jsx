import React from 'react'
import Item from './Item'

function Lists({ list }) {
    return (
        <div>
            <ul>
                {list.map(function (item) {
                    return <Item item={item} />
                })
                }
            </ul>
        </div>
    )
}

export default Lists


