import { configureStore } from '@reduxjs/toolkit';
import driver from './slices/driverSlice';

export const store = configureStore({
    reducer: {
        driver,
    },
})