import { configureStore } from '@reduxjs/toolkit';
import topicsReducer from '../features/slice.js';
const store=configureStore({
reducer:{
    topics:topicsReducer
}
})
export default store;
