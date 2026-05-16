import { configureStore } from '@reduxjs/toolkit';
import driver from './slices/driverSlice';
import search from './slices/searchSlice';

export const store = configureStore({
    reducer: {
        driver,
        search,
    },
})