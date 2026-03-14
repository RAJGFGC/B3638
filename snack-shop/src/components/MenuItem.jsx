import React from 'react'

function MenuItem(props) {

    const { name, price, count, onAdd, onRemove, image } = props;
    return (
        <div className='card'>
            <img src={image} alt={name} className='food-image' />
            <h3>{name}</h3>
            <p className='price'>Price: {price}</p>
            <p className='count'>Count: {count}</p>
            <div className='button-group'>
                <button className='add-btn' onClick={() => onAdd(name)}>
                    Add
                </button>
                <button className='remove-btn' onClick={() => onRemove(name)}>
                    Remove
                </button>
            </div>
        </div>
    )
}

export default MenuItem