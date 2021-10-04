import './App.css';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import NavigationBar from './components/Navbar';
import HomePage from './pages/HomePage';

function App() {
  return (
    <>
      <NavigationBar />
      <Router>
        <Switch>
          <Route path='/' component={HomePage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
