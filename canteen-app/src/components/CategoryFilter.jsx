import React from 'react'

const categories = ["All", "Breakfast", "Snacks", "Lunch", "Drinks"];

function CategoryFilter({ selectedCategory, setSelectedCategory }) {
    return (
        <div className="flex flex-wrap gap-3 mt-4">
            {categories.map((category) => (
                <button
                    key={category}
                    className={`px-4 py-2 rounded-full ${selectedCategory === category
                        ? "bg-orange-500 text-white"
                        : "bg-gray-200 text-gray-700"
                        }`}
                    onClick={() => setSelectedCategory(category)}
                >
                    {category}
                </button>
            ))}
        </div>
    )
}

export default CategoryFilter