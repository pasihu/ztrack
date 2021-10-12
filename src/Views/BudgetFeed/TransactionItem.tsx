import {
  ListItem,
  IconButton,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Input,
} from '@mui/material';
import {
  editTransaction,
  removeTransaction,
  Transaction,
} from '../../state/budget/budgetSlice';
import { useAppDispatch } from '../../state/hooks';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';
import EuroSymbolIcon from '@mui/icons-material/EuroSymbol';
import { useState } from 'react';

const TransactionItem = ({ id, value, description }: Transaction) => {
  const [editable, setEditable] = useState(false);
  const [newDescription, setNewDescription] = useState(description);
  const [newValue, setNewValue] = useState(value);
  const dispatch = useAppDispatch();
  const handleSave = () => {
    setEditable(false);
    dispatch(
      editTransaction({ id, value: newValue, description: newDescription }),
    );
  };
  return (
    <ListItem
      secondaryAction={
        <>
          {editable && (
            <IconButton aria-label="edit" onClick={() => handleSave()}>
              <SaveIcon />
            </IconButton>
          )}
          <IconButton aria-label="edit" onClick={() => setEditable(true)}>
            <EditIcon />
          </IconButton>
          <IconButton
            aria-label="delete"
            onClick={() => dispatch(removeTransaction(id))}
          >
            <DeleteIcon />
          </IconButton>
        </>
      }
    >
      <ListItemAvatar>
        <Avatar
          sx={{
            backgroundColor: Math.sign(value) === 1 ? 'green' : 'red',
          }}
        >
          <EuroSymbolIcon />
        </Avatar>
      </ListItemAvatar>
      {!editable && <ListItemText primary={value} secondary={description} />}
      {editable && (
        <>
          <Input
            sx={{ marginRight: '1rem' }}
            value={newValue}
            onChange={({ target: { value: val } }) =>
              setNewValue(parseInt(val))
            }
          />
          <Input
            value={newDescription}
            onChange={({ target: { value: val } }) => setNewDescription(val)}
          />
        </>
      )}
    </ListItem>
  );
};

export default TransactionItem;
