import { configureStore } from "@reduxjs/toolkit";
import productSlice from './productReducer'

const store = configureStore({
    reducer:{productSlice}
});

export default store