import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from 'reselect';

import produceData from '../../mockData/produce.json';

// custom hook to get all produce
const getProduceSatte = (state) => state.produce;

// memoize the custom hook, so it only re-renders when values change
export const getAllProduce = createSelector(
    [getProduceSatte],
    (produce) => Object.values(produce)
);

const ProduceSlice = createSlice({
    name: 'produce',
    initialState: produceData.reduce((accum, item) => {
        accum[item.id] = item;
        return accum;
    }, {}),
    reducers: {
        populateProduce: (state, action) => {
            action.payload.forEach((produceItem) => {
                state[produceItem.id] = produceItem;
            })
        },

        toggleLiked: (state, action) => {
            const id = action.payload;

            if (state[id]) {
                state[id].liked = !state[id].liked;
            }
        }
    }
});

export const { populateProduce, toggleLiked } = ProduceSlice.actions;

export default ProduceSlice.reducer;
