import React from 'react'

function StatusBoard({ totalIems }) {
    let message = "No orders yet!";
    let emoji = "😔";

    if (totalIems > 0 && totalIems <= 3) {
        message = "You have a few orders. Keep it up!";
        emoji = "😊";
    } else if (totalIems > 3 && totalIems <= 7) {
        message = "Great job! You have many orders!";
        emoji = "🎉";
    } else if (totalIems > 7) {
        message = "Amazing! You're a top seller!";
        emoji = "🏆";
    }
    return (
        <div className='card status-card'>
            <h2>Status Board</h2>
            <p className='status-text'>
                {message} {emoji}
            </p>
        </div>
    )
}

export default StatusBoard