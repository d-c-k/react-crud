import React from 'react'
import { Route, Switch } from 'react-router-dom'
import BodyContainerStyled from './components/styled-components/BodyContainerStyled';
import CustomersPage from './pages/CustomersPage';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import ErrorPage from './pages/ErrorPage';

function App() {
  return (
    <BodyContainerStyled>
      <Switch> 
        <Route path="/customers">
          <CustomersPage />
        </Route>

        <Route path="/home">
          <HomePage />
        </Route>

        <Route path="/error">
          <ErrorPage />
        </Route>

        <Route path="/">
          <LoginPage />         
        </Route>
      </Switch>
    </BodyContainerStyled>
  );
}

export default App;
