import {configureStore} from "@reduxjs/toolkit"
import bookedSlice from "./Shopping-Cart/bookedSlice";
import cartSlice from "./Shopping-Cart/cartSlice";
import uiSlice from "./Shopping-Cart/uiSlice"

const store = configureStore({
    reducer : {ui : uiSlice.reducer, cart : cartSlice.reducer,book :bookedSlice.reducer}
})

export default store;