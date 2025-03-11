import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store/store.jsx';
import { increment, decrement, incrementByAmount } from "./store/slices/CounterSlice.jsx";
import { populateProduce, toggleLiked } from './store/slices/ProduceSlice.jsx';
import { addToCart, incrementCounter, decrementCounter, updateCounter } from './store/slices/CartSlice.jsx';
import App from './App.jsx';
import './index.css';

// expose store in development mode for debugging
if (process.env.NODE_ENV !== "production") {
  window.store = store;
  window.increment = increment;
  window.decrement = decrement;
  window.incrementByAmount = incrementByAmount;
  window.populateProduce = populateProduce;
  window.addToCart = addToCart;
  window.incrementCounter = incrementCounter;
  window.decrementCounter = decrementCounter;
  window.updateCounter = updateCounter;
  window.toggleLiked = toggleLiked;
}

const Root = () => {
  return (
    <StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </StrictMode>
  );
};

createRoot(document.getElementById('root')).render(<Root />);
