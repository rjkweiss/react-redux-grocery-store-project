import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from 'reselect';

// get cart state
const getCartState = (state) => state.cart;
const getProduceState = (state) => state.produce;

//create custom hook
export const getCartItems = createSelector(
    [getCartState, getProduceState],
    (cart, produce) => cart.order.map((id) => ({
        ...cart.items[id],
        name: produce[id]?.name || "Unknown Item"
    }))
);

// initial state
const initialState = {
    items: {},
    order: [],
    isCartOpen: false,
}

const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const id = action.payload;

            if (state.items[id]) {
                state.items[id].count += 1;
            } else {
                state.items[id] = { id, count: 1 }
                state.order.push(id)
            }
            state.isCartOpen = true;
        },

        incrementCounter: (state, action) => {
            const id = action.payload;
            if (state.items[id]) {
                state.items[id].count += 1;
                state.isCartOpen = true;
            }
        },

        decrementCounter: (state, action) => {
            const id = action.payload;
            if (state.items[id]) {
                if (state.items[id].count > 1) {
                    state.items[id].count -= 1;
                } else {
                    delete state.items[id];
                    state.order = state.order.filter((itemId) => itemId !== id);
                }
            }

            // close if empty
            if (Object.keys(state.items).length === 0) {
                state.isCartOpen = false;
            }
        },

        updateCounter: (state, action) => {
            const { id, count } = action.payload;

            if (count > 0) {
                state.items[id] = { id, count };
            } else {
                delete state.items[id];
                state.order = state.order.filter((itemId) => itemId !== id);
            }

            // close if empty
            if (Object.keys(state.items).length === 0) {
                state.isCartOpen = false;
            }
        },

        clearCart: () => {
            // reset to initial state
            return initialState;
        },

        toggleCartOpen: (state) => {
            state.isCartOpen = !state.isCartOpen;
        },

        closeCart: (state) => {
            state.isCartOpen = false;
        }
    }
});

export const { addToCart, incrementCounter, decrementCounter, updateCounter, clearCart, toggleCartOpen, closeCart } = CartSlice.actions;

export default CartSlice.reducer;
