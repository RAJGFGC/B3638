
import './App.css'
import Cart from './components/Cart'
import CartSummary from './components/CartSummary'
import Navbar from './components/Navbar'
import ProductList from './components/ProductList'

function App() {

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <Navbar />
      <h1>Campus Canteen Cart</h1>
      <ProductList />
      <Cart />
      <CartSummary />
    </div>
  )
}

export default App
