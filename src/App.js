import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
// import { useSelector } from 'react-redux'
// import routers from './utils/router'
// import { renderRouter } from './utils/router.config'
import Login from "./pages/login/login"
import Register from "./pages/register/register"
import UserList from "./pages/userList/userList"

export default function App() {
  // const { isLogin } = useSelector(state => state.login)
  // const authPath = '/login'
  return (
    <>
      <BrowserRouter
      >
        {/* {renderRouter(routers, isLogin, authPath)} */}
        <Switch>
          <Route path="/" exact strict render={() => {
            return <Redirect to="/login" />
          }} />
          <Route path="/login" exact strict component={Login} />
          <Route path="/register" exact strict component={Register} />
          <Route path="/userList"  component={UserList} />
        </Switch>
      </BrowserRouter>
    </>
  )
}