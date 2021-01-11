import React, { useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import BodyContainerStyled from './components/styled-components/BodyContainerStyled';
import CustomersPage from './pages/CustomersPage';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import ErrorPage from './pages/ErrorPage';
import { UserContext } from './contexts/UserContext';

function App() {
  const [user, setUser] = useState("")
  const UserContextValue = {
    user, setUser
  }

  return (
    <BodyContainerStyled>
      <UserContext.Provider value={UserContextValue}>
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
      </UserContext.Provider>
    </BodyContainerStyled>
  );
}

export default App;
