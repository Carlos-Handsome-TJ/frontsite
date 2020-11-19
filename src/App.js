import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import routers from './utils/router'
import { renderRouter } from './utils/router.config'


export default function App() {
  const auth = false
  const authPath = '/login'
  return (
    <>
      <BrowserRouter>
        {/* <Switch> */}
          {renderRouter(routers, auth, authPath)}
          {/* <Route path='/' exact component={Login} />
        <Route path='/login' exact component={Login} />
        <Route path='/register' strict exact component={RegistrationForm} />
        <Route path='/userList' strict exact component={UserList} /> */}
        {/* </Switch> */}
      </BrowserRouter>
    </>
  )
}