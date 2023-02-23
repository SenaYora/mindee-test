import { configureStore } from '@reduxjs/toolkit';
import itemReducer from '../features/item/item-slice';

export const store = configureStore({
  reducer: {
    item: itemReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
