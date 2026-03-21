
import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header';
import ProductCard from './components/ProductCard';
import ProductModal from './components/ProductModal';

function App() {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, [])

  function openModal(product) {
    setSelectedProduct(product);
  }

  function closeModal() {
    setSelectedProduct(null);
  }

  function addToCart(product) {
    setCart([...cart, product]);
    closeModal();
  }

  return (
    <div className='app'>
      <Header cartCount={cart.length} />

      <h1 className='title'>Fake Store Shopping App</h1>

      {loading ? (<p className='message'>Loading products....</p>) : (
        <div className='product-grid'>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} openModal={openModal} />
          ))}
        </div>
      )}

      {selectedProduct && (
        <ProductModal product={selectedProduct} closeModal={closeModal} addToCart={addToCart} />
      )}
    </div>
  )
}

export default App
