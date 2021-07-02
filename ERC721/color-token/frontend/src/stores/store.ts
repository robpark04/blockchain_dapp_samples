import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import netReducer from './netSlice';

export const store = configureStore({
  reducer: {
    net: netReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
