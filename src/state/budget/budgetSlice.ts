import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface Transaction {
  id: string;
  value: number;
  description: string;
}

export interface BudgetState {
  transactions: Transaction[];
}

const initialState: BudgetState = {
  transactions: [],
};

// Reducers
export const budgetSlice = createSlice({
  name: 'budget',
  initialState,
  reducers: {
    addTransaction: (state, action: PayloadAction<Transaction>) => {
      state.transactions.push(action.payload);
    },
    removeTransaction: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        transactions: state.transactions.filter(
          ({ id }) => id !== action.payload,
        ),
      };
    },
    editTransaction: (state, action: PayloadAction<Transaction>) => {
      const index = state.transactions.findIndex(
        (transaction) => transaction.id === action.payload.id,
      );
      const newTransactions = [...state.transactions];
      newTransactions[index] = action.payload;
      return {
        ...state,
        transactions: newTransactions,
      };
    },
  },
});

export const { addTransaction, removeTransaction, editTransaction } = budgetSlice.actions;

// Selectors
export const selectTotal = (state: RootState) =>
  state.budget.transactions.reduce(
    (previous: number, current) => previous + current.value,
    0,
  );
export const selectTransactions = (state: RootState) =>
  state.budget.transactions;

export default budgetSlice.reducer;
