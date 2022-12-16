import { FORSALE } from "../../app/shared/FORSALE";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    forSaleArray: FORSALE
};


const forSaleSlice = createSlice({
    name: 'forSale',
    initialState,
    reducers: {
        addItem: (state, action) => {
            console.log('addItem action.payload:', action.payload);
            console.log('addItem state.forSaleArray:', action.payload);
            const newItem = {
                id: state.forSaleArray.length + 1,
                ...action.payload
            };
            state.forSaleArray.push(newItem)
        }
    },
});

export const forSaleReducer = forSaleSlice.reducer;

export const { newItem } = forSaleSlice.actions;

export const selectForSaleById = (id) => (state) => {
    return (
    state.forSale.forSaleArray.find(item => item.id === parseInt(id))
    )
};

export const selectAllForSale = (state) => {
    return state.forSale.forSaleArray;
};
// export const selectRandomForSale = () => {
//     return FORSALE[Math.floor(FORSALE.length * Math.random())];
// };


