import { createSlice } from "@reduxjs/toolkit"

const bookedSlice = createSlice({
    name : "book",
    initialState : {bookIsVisible : false},
    reducers :{
        toggle(state) {
            state.bookIsVisible = !state.bookIsVisible
        }
    }
})

export const bookAction = bookedSlice.actions;
export default bookedSlice;