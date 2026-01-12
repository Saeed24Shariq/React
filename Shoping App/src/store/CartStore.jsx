import {configureStore} from '@reduxjs/toolkit';
import { redirect } from 'react-router-dom';
import cartReducer from "./CartSlice";
export const CartStore = configureStore(
    {
        reducer: {
            cart: cartReducer
        }
    } 
);