import React from 'react'

function Search() {

    return (
        <>
            {/* Give me modern UI serch bar with search icon and placeholder text "Search here..." */}
            <div>
                <input type="text" placeholder="Search here..." className="search-input" />
                <span>🔍</span>
            </div>

        </>
    )
}

export default Search