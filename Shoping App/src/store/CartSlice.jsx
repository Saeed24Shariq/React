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
                const itemRemove = action.payload;
                state.value = state.value.filter( (item) => {
                   return item.id != itemRemove;
                } )
                console.log(state.value)
            },
            addQty: (state, action) => {
                state.value.forEach( (item) => {
                    if (item.id == action.payload.id) {
                        item.qty += 1;
                    }
                } )
            },
            removeQty: (state, action) => {
                state.value.forEach( (item) => {
                    if (item.id == action.payload.id) {
                        item.qty -= 1;
                    }
                } )
            }
        }
    }
);

export const {addValue, removeValue, addQty, removeQty} = CartSlice.actions;

export default CartSlice.reducer;