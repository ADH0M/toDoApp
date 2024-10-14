import React from 'react'
import SignUp from './SignUp'
import Login from './Login'

const HomePage = () => {
  return (
    <div className='flex justify-evenly items-center bg-slate-500 h-full w-full'>
        <Login/>
        <SignUp/>
    </div>
  )
}

export default HomePage
