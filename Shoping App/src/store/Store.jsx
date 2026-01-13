import {configureStore} from '@reduxjs/toolkit';
import { redirect } from 'react-router-dom';
import cartReducer from "./CartSlice.jsx";
import counnterReducer from "./CounterSlice.jsx"
export const Store = configureStore(
    {
        reducer: {
            cart: cartReducer,
            counter: counnterReducer
        }
    } 
);