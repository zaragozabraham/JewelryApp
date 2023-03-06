import {configureStore} from '@reduxjs/toolkit';
import jewelryReducer from './src/features/jewels/jewelrySlice';

export const store = configureStore({
  reducer: {
    jewelry: jewelryReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
