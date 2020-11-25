import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { useSelector } from 'react-redux'
import routers from './utils/router'
import { renderRouter } from './utils/router.config'

export default function App() {
  const { isLogin } = useSelector(state => state.login)
  const authPath = '/login'
  return (
    <>
      <BrowserRouter
        basename="/login"
      >
        {renderRouter(routers, isLogin, authPath)}
      </BrowserRouter>
    </>
  )
}