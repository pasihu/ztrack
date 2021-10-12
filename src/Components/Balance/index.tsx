import { selectTotal } from '../../state/budget/budgetSlice';
import { useAppSelector } from '../../state/hooks';
import styles from './index.module.scss';

const Balance = () => {
  const total = useAppSelector(selectTotal);
  return (
    <h1 className={styles.totalBalance}>
      {total} <span>€</span>
    </h1>
  );
};

export default Balance;
