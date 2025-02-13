import { configureStore } from '@reduxjs/toolkit';
import pallateReducer from '../slices/pallateSlice.js'

const store = configureStore({
    reducer: pallateReducer
})



export default store