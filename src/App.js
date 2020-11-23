import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import routers from './utils/router'
import { renderRouter } from './utils/router.config'


export default function App() {
  const auth = false
  const authPath = '/login'
  return (
    <>
      <BrowserRouter>
        {renderRouter(routers, auth, authPath)}
      </BrowserRouter>
    </>
  )
}