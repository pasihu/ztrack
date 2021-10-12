import AddCircleIcon from '@mui/icons-material/AddCircle';
import EuroSymbolIcon from '@mui/icons-material/EuroSymbol';
import { v4 as uuid } from 'uuid';
import {
  ListItem,
  IconButton,
  ListItemAvatar,
  Avatar,
  ListItemText,
  FormControl,
  Input,
  InputLabel,
  FormHelperText,
  Stack,
} from '@mui/material';
import { useState } from 'react';
import { addTransaction } from '../../state/budget/budgetSlice';
import { useAppDispatch } from '../../state/hooks';

const AddTransaction = () => {
  const dispatch = useAppDispatch();
  const [amount, setAmount] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [error, setError] = useState<string | undefined>(undefined);

  const validate = (value: string): string | undefined => {
    const numberValidationRegex = /^-?[0-9]*$/;
    if (!numberValidationRegex.test(value)) return 'You can only add numbers';
    return undefined;
  };

  const handleAdd = () => {
    const validationResult = validate(amount);
    if (validationResult) {
      setError(validationResult);
    } else {
      dispatch(
        addTransaction({ id: uuid(), value: parseInt(amount), description }),
      );
      setAmount('');
      setDescription('');
    }
  };

  return (
    <ListItem
      secondaryAction={
        <IconButton edge="end" aria-label="delete" onClick={() => handleAdd()}>
          <AddCircleIcon />
        </IconButton>
      }
    >
      <ListItemAvatar>
        <Avatar>
          <EuroSymbolIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText>
        <Stack direction="row" spacing={2}>
          <FormControl variant="standard">
            <InputLabel htmlFor="add-input">Amount</InputLabel>
            <Input
              id="add-input-amount"
              onChange={({ target: { value } }) => setAmount(value)}
              value={amount}
              error={!!error}
            ></Input>
            <FormHelperText>{error}</FormHelperText>
          </FormControl>
          <FormControl variant="standard" sx={{ width: '100%' }}>
            <InputLabel htmlFor="add-input">Description</InputLabel>
            <Input
              id="add-input-description"
              value={description}
              onChange={({ target: { value } }) => setDescription(value)}
            ></Input>
            <FormHelperText>{error}</FormHelperText>
          </FormControl>
        </Stack>
      </ListItemText>
    </ListItem>
  );
};

export default AddTransaction;
