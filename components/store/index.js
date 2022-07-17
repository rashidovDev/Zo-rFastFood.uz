import {configureStore} from "@reduxjs/toolkit"
import cartSlice from "./Shopping-Cart/cartSlice";
import uiSlice from "./Shopping-Cart/uiSlice"

const store = configureStore({
    reducer : {ui : uiSlice.reducer, cart : cartSlice.reducer}
})

export default store;