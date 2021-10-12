import { CssBaseline, Container, AppBar } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import './App.css';
import Balance from '../src/Components/Balance';
import BudgetFeed from './Views/BudgetFeed';
import ErrorBoundary from './Components/ErrorBoundary';

const App = () => {
  return (
    <CssBaseline>
      <AppBar position="static">
        <Container maxWidth="lg">
          <IconButton size="large" edge="start" color="inherit">
            <MenuIcon />
          </IconButton>
        </Container>
      </AppBar>
      <Container maxWidth="lg">
        <ErrorBoundary>
          <Balance />
          <BudgetFeed />
        </ErrorBoundary>
      </Container>
    </CssBaseline>
  );
};

export default App;
