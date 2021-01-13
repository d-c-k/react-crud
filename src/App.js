import React, { useState } from 'react'
import { Route, Switch } from 'react-router-dom'

import { UserContext } from './contexts/UserContext';

import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import ErrorPage from './pages/ErrorPage';
import CreateCustomerPage from './pages/CreateCustomerPage';
import CustomerDetailPage from './pages/CustomerDetailPage';

import BodyContainerStyled from './components/styled-components/BodyContainerStyled';

function App() {
  const [user, setUser] = useState({})
  const [customerData, setCustomerData] = useState([])
  const UserContextValue = {
    user, setUser,
    customerData, setCustomerData
  }

  return (
    <BodyContainerStyled>
      <UserContext.Provider value={UserContextValue}>
        <Switch> 
          <Route path="/customers/:id" component={CustomerDetailPage} />

          <Route path="/addcustomers">
            <CreateCustomerPage />
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
