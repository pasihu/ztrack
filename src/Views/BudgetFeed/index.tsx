import {
  Grid,
  List,
} from '@mui/material';
import AddTransaction from './AddTransaction';
import {
  selectTransactions,
} from '../../state/budget/budgetSlice';
import { useAppSelector } from '../../state/hooks';
import TransactionItem from './TransactionItem';

const BudgetFeed = () => {
  const transactions = useAppSelector(selectTransactions);
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <List>
          <AddTransaction />
          {transactions.map(({ id, value, description }) => {
            return (
              <TransactionItem
                key={id}
                id={id}
                value={value}
                description={description}
              />
            );
          })}
        </List>
      </Grid>
    </Grid>
  );
};

export default BudgetFeed;
