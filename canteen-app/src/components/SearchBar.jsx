
function SearchBar({ searchTerm, setSearchTerm, ref }) {
    return (
        <div className='w-full'>
            <input
                className='w-full p-3 rounded-xl border 
                border-slate-300 shadow-sm focus:outline-none 
                focus:ring-2 focus:ring-orange-400'
                ref={ref}
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder='Search food items...'
            />
        </div>
    )
}

export default SearchBar