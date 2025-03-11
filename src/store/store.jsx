import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import CounterReducer from './slices/CounterSlice';
import ProduceReducer from "./slices/ProduceSlice";
import CartReducer from './slices/CartSlice';

// set up middleware for logger
const middleware = (getDefaultMiddleware) => process.env.NODE_ENV !== "production" ? getDefaultMiddleware().concat(logger) : getDefaultMiddleware();

// redux store configuration
const store =configureStore({
    reducer: {
        counter: CounterReducer,
        produce: ProduceReducer,
        cart: CartReducer,
    },
    middleware,
    devTools:process.env.NODE_ENV !== "production",
});

export default store;
