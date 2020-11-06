import React from 'react'
import {BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from './pages/login/login'
import RegistrationForm from './pages/register/register'
import UserList from './pages/userList/userList.jsx'

export default function App() {
  return (
    <>
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Login} />
        <Route path='/login' exact component={Login} />
        <Route path='/register' strict exact component={RegistrationForm} />
        <Route path='/userList' strict exact component={UserList} />
      </Switch>
    </BrowserRouter>
    </>
  )
}