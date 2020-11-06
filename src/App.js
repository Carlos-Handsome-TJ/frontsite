import React from 'react'
import {BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from './pages/login/login'
import RegistrationForm from './pages/register/register'

export default function App() {
  return (
    <>
    <BrowserRouter>
      <Switch>
        <Route path='/login' component={Login} />
        <Route path='/register' exact component={RegistrationForm} />
      </Switch>
    </BrowserRouter>
    </>
  )
}