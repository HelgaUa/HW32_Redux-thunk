import { configureStore } from "@reduxjs/toolkit";
import { thunk } from 'redux-thunk';
import todoSlice from "../engine/todo/todoSlice.js";

export const store = configureStore({
    reducer: {
        todo: todoSlice.reducer,
    },
    middleware: () => [thunk]
})
