import { useReducer, useEffect } from "react"
import Header from "./components/Header"
import MenuItem from "./components/MenuItem"
import CartSummary from "./components/CartSummary";
import StatusBoard from "./components/StatusBoard";

const initialState = {
  Tea: 0,
  Coffee: 0,
  Samosa: 0,
  Vada: 0,
  Cake: 0
}

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        [action.payload]: state[action.payload] + 1
      };
    case "REMOVE_ITEM":
      return {
        ...state,
        [action.payload]: state[action.payload] > 0 ? state[action.payload] - 1 : 0
      };
    case "RESET_CART":
      return initialState;
    default:
      return state;
  }
}

function App() {

  // States
  // const [teaCount, setTeaCount] = useState(0);
  // const [coffeeCount, setCoffeeCount] = useState(0);
  // const [samosaCount, setSamosaCount] = useState(0);
  const [cartState, dispatch] = useReducer(cartReducer, initialState);



  // Prices
  const teaPrice = 10;
  const coffeePrice = 15;
  const samosaPrice = 20;
  const vadaPrice = 20;
  const cakePrice = 50;

  function handleAddItem(itemName) {
    dispatch({ type: "ADD_ITEM", payload: itemName });
  }

  function handleRemoveItem(itemName) {
    dispatch({ type: "REMOVE_ITEM", payload: itemName });
  }

  function handleResetCart() {
    dispatch({ type: "RESET_CART" });
  }
  // derived values
  const totalItems = cartState.Tea + cartState.Coffee + cartState.Samosa + cartState.Vada + cartState.Cake;
  const totalAmount = cartState.Tea * teaPrice + cartState.Coffee * coffeePrice + cartState.Samosa * samosaPrice + cartState.Vada * vadaPrice + cartState.Cake * cakePrice;

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
              count={cartState.Tea}
              image="../public/tea.png"
              onAdd={handleAddItem}
              onRemove={handleRemoveItem}
            />
            <MenuItem
              name="Coffee"
              price={coffeePrice}
              count={cartState.Coffee}
              image="../public/coffee.png"
              onAdd={handleAddItem}
              onRemove={handleRemoveItem}
            />
            <MenuItem
              name="Samosa"
              price={samosaPrice}
              count={cartState.Samosa}
              image="../public/samosa.jpg"
              onAdd={handleAddItem}
              onRemove={handleRemoveItem}
            />
            <MenuItem
              name="Vada"
              price={vadaPrice}
              count={cartState.Vada}
              image="../public/vada.png"
              onAdd={handleAddItem}
              onRemove={handleRemoveItem}
            />
            <MenuItem
              name="Cake"
              price={cakePrice}
              count={cartState.Cake}
              image="../public/cake.png"
              onAdd={handleAddItem}
              onRemove={handleRemoveItem}
            />
          </div>
        </div>
        <div className="summary-section">
          <CartSummary
            teaCount={cartState.Tea}
            coffeeCount={cartState.Coffee}
            samosaCount={cartState.Samosa}
            vadaCount={cartState.Vada}
            cakeCount={cartState.Cake}
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
