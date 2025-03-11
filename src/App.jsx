import { toggleCartOpen, closeCart } from "./store/slices/CartSlice";

import ProduceList from "./components/ProduceList/ProduceList";
import Cart from "./components/Cart/Cart";
import { useSelector, useDispatch } from "react-redux";


function App() {
  const dispatch = useDispatch();

  // showcart if we have anything in the cart
  const isCartOpen = useSelector((state) => state.cart.isCartOpen);

  return (
    <>
      <nav>
        <h1>Grocery Store</h1>
        <button className="checkout-button" onClick={() => dispatch(toggleCartOpen())}>
          <i className="fas fa-shopping-bag" />
          Checkout
          </button>
      </nav>
      <main style={isCartOpen ? {marginRight: '300px'}: {}}>
        <ProduceList />
      </main>

      <div className="sidebar" style={isCartOpen ? {transform: "translateX(-100%)"}: {}}>
        <div className="sidebar-header">
          <button className="arrow-button" onClick={() => dispatch(closeCart())}>
            <i className="fas fa-arrow-right"></i>
          </button>
        </div>
        <Cart />
      </div>
    </>
  )
}

export default App;
