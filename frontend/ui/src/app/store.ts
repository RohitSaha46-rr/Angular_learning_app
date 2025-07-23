import { configureStore } from '@reduxjs/toolkit';
import topicsReducer from '../features/slice.ts';
import  {apiSlice } from '../features/apiSlice.ts';
import authReducer from '../features/authSlice.ts';

import { authApiSlice } from '../features/authapiSlice.ts';

const store=configureStore({
reducer:{
    topics:topicsReducer, // regular slice reducer
    [authApiSlice.reducerPath]: authApiSlice.reducer,
    [apiSlice.reducerPath]: apiSlice.reducer, // api part reducer
    auth: authReducer,
    
},
middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
})
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;