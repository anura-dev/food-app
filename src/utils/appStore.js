import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const appStore = configureStore({
    //reducer is a combined reducers for each slice of a reducer
    //i.e. reducer is a combination of multiple reducer of each slices
    reducer: {
        cart: cartReducer
    }
});

export default appStore;