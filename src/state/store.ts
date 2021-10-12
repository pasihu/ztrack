import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import budgetSlice from './budget/budgetSlice';

export const store = configureStore({
  reducer: {
    budget: budgetSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
ReturnType,
RootState,
unknown,
Action<string>
>;
