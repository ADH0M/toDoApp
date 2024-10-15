import React from 'react'
import { Link } from 'react-router-dom'

const MainNav = () => {
  return (
    <div className=' p-5  text-white bg-blue-500 w-52 h-[100vh]'>
        <ul className='flex flex-col gap-2 p-5 '>
            
            <li >                 
                <Link to={``}> home </Link>
            </li>
            <li >                 
                <Link to={`/products`}> Procuts </Link>
            </li>
            <li >                 
                <Link to={`todolist`}> todolist </Link>
            </li>
            <li >                 
                <Link to={`pokemon`}> Pokemon name </Link>
            </li>
            <li >                 
                <Link to={`home`}> user </Link>
            </li>
            <li >                 
                <Link to={`signup`}> signup </Link>
            </li>
            <li >                 
                <Link to={`userpage`}> userpage </Link>
            </li>
            <li >                 
                <Link to={`forgitpass`}> forget password </Link>
            </li>
            <li >                 
                <Link to={`task`}> Tasks </Link>
            </li>

        </ul>
    </div>
  )
}

export default MainNav
