import {combineReducers, configureStore} from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const appStore = configureStore({
    reducer: combineReducers(
        {cart: cartReducer},
    )
});

export default appStore;