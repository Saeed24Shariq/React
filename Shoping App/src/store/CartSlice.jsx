import {createSlice} from "@reduxjs/toolkit";

const CartSlice = createSlice(
    {
        name: "cart",
        initialState: {
            value: []
        },
        reducers: {
            addValue: (state, action) => {
                const item = action.payload;
                state.value.push(item); 
            },
            removeValue: (state, action) => {
                const item = action.payload;
                state.value.pop(item);
            } 
        }
    }
);

export const {addValue, removeValue} = CartSlice.actions;

export default CartSlice.reducer;