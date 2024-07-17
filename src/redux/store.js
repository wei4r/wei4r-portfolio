"use client"
import { configureStore } from '@reduxjs/toolkit';
import achievementsReducer from './slices/achievementsSlice';

export const store = configureStore({
  reducer: {
    achievements: achievementsReducer,
  },
});
