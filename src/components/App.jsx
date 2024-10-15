import React from 'react'
import MainNav from './navbar/MainNav'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <div className='flex gap 10'>
        <MainNav/>
        <Outlet/>
     </div>
  )
}

export default App
