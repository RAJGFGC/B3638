import FoodList from "./components/FoodList"
import { useCallback, useEffect, useMemo, useReducer, useRef, useState } from "react"
import Header from "./components/Header"
import Cart from "./components/Cart"
import OrderForm from "./components/OrderForm"
import CartItem from "./components/CartItem"
import OrderSummary from "./components/OrderSummary"
import SearchBar from "./components/SearchBar"
import CategoryFilter from "./components/CategoryFilter"
import { cartReducer } from "./reducers/cartReducer"
import { foodItems } from "./data/foodData"


function App() {

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [cart, dispatch] = useReducer(cartReducer, [], () => {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  });

  const searchInputRef = useRef(null);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    searchInputRef.current?.focus();
  }, []);

  const filteredFood = useMemo(() => {
    return foodItems.filter(item => {
      const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const total = useMemo(() => {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }, [cart]);

  const cartCount = useMemo(() => {
    return cart.reduce((count, item) => count + item.quantity, 0);
  }, [cart]);

  const handleAddToCart = useCallback((food) => {
    dispatch({ type: 'ADD_TO_CART', payload: food });
  }, []);

  return (
    <div className="min-h-screen bg-slate-100">
      <Header cartCount={cartCount} />
      <div className="container mx-auto px-4 py-6 flex gap-6">
        <div className="flex-1">
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} ref={searchInputRef} />
          <CategoryFilter selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        </div>
      </div>
      <div className="container mx-auto px-4 py-6 flex gap-6"></div>
      <div className="flex-1">
        <FoodList items={filteredFood} onAddToCart={handleAddToCart} />
      </div>
      <Cart cart={cart} dispatch={dispatch} total={total} />
    </div>
  )
}

export default App
