import React from 'react';
import { Provider } from 'react-redux';
import generateStore from './redux/store';
import { ThemeProvider } from '@material-ui/core/styles';
import ThemeConfig from './assets/styles/ThemeConfing';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import './App.css';

import InitialPage from './components/initialPage/InitialPage'

function App() {

  const store = generateStore()
  
  return (
    <Provider store={store}>
      <Router>
        <ThemeProvider theme={ThemeConfig}>
          <Switch>
            <Route path="/" exact>
              <InitialPage />
            </Route>
          </Switch>
        </ThemeProvider>
      </Router>
    </Provider>
  );
}

export default App;
