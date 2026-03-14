import { useState, useEffect } from "react"
import Header from "./components/Header"
import MenuItem from "./components/MenuItem"
import CartSummary from "./components/CartSummary";
import StatusBoard from "./components/StatusBoard";


function App() {

  // States
  const [teaCount, setTeaCount] = useState(0);
  const [coffeeCount, setCoffeeCount] = useState(0);
  const [samosaCount, setSamosaCount] = useState(0);

  // Prices
  const teaPrice = 10;
  const coffeePrice = 15;
  const samosaPrice = 20;

  // Child -> Parent handlers
  function handleAddItem(itemName) {
    if (itemName === "Tea") {
      setTeaCount(teaCount + 1);
    } else if (itemName === "Coffee") {
      setCoffeeCount(coffeeCount + 1);
    } else if (itemName === "Samosa") {
      setSamosaCount(samosaCount + 1);
    }
  }

  function handleRemoveItem(itemName) {
    if (itemName === "Tea" && teaCount > 0) {
      setTeaCount(teaCount - 1);
    } else if (itemName === "Coffee" && coffeeCount > 0) {
      setCoffeeCount(coffeeCount - 1);
    } else if (itemName === "Samosa" && samosaCount > 0) {
      setSamosaCount(samosaCount - 1);
    }
  }
  // derived values
  const totalItems = teaCount + coffeeCount + samosaCount;
  const totalAmount = teaCount * teaPrice + coffeeCount * coffeePrice + samosaCount * samosaPrice;

  useEffect(() => {
    document.title = `Total Items: ${totalItems} | Total Amount: ${totalAmount}`;
    console.log("Document title updated!");
    console.log("Total Items:", totalItems);
    console.log("Total Amount:", totalAmount);
  }, [totalItems]);

  return (
    <div className="app">
      <Header />

      <div className="content">
        <div className="menu-section">
          <h2 className="section-title">Menu</h2>
          <div className="menu-grid">
            <MenuItem
              name="Tea"
              price={teaPrice}
              count={teaCount}
              image="../public/tea.png"
              onAdd={handleAddItem}
              onRemove={handleRemoveItem}
            />
            <MenuItem
              name="Coffee"
              price={coffeePrice}
              count={coffeeCount}
              image="../public/coffee.png"
              onAdd={handleAddItem}
              onRemove={handleRemoveItem}
            />
            <MenuItem
              name="Samosa"
              price={samosaPrice}
              count={samosaCount}
              image="../public/samosa.jpg"
              onAdd={handleAddItem}
              onRemove={handleRemoveItem}
            />
          </div>
        </div>
        <div className="summary-section">
          <CartSummary
            teaCount={teaCount}
            coffeeCount={coffeeCount}
            samosaCount={samosaCount}
            totalItems={totalItems}
            totalAmount={totalAmount}
          />
          <StatusBoard totalIems={totalItems} />
        </div>
      </div >
    </div >
  )
};


export default App
