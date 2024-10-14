import React from 'react';
import { createBrowserRouter} from 'react-router-dom';
import SignUp from './Auth/SignUp';
import Login from './Auth/Login';
import ForgitPass from './Auth/ForgitPass';
import Counter from './useReducer/Counter';
import ToDoList from './useReducer/ToDoList';
import TaskApp from './userTasks/TaskPage';
import UserPage from './userTasks/UserPage';
import MyApp from '../FetchData/App/MyApp';
import HomePage from '../FetchData/Components/User/HomePage';
import Books from './useReducer/Books';
import ProductsPage from './products/ProductsPage';

const router = createBrowserRouter([
    {
        path:'/',
        element:<Login/>,

    },
    {
        path:'/products',
        element:<ProductsPage/>,

    },
    {
        path:'/home',
        element:<HomePage/>,

    },
    {
        path:'/myApp',
        element:<MyApp/>,

    },
    {
        path:'/todolist',
        element:<ToDoList/>,
        children:[
            {path:'',element:<Books/>}
        ]
    },
    {
        path:'/task',
        element:<TaskApp/>,

    },
    {
        path:'/userpage',
        element:<UserPage/>,

    },
    
    {
        path:'/forgitpass',
        element:<ForgitPass/>,
        children:[
            {   
                path: '/forgitpass',
                element:<Counter/>
            }
        ]
    },
    

    
    {
        path:'/signup',
        element:<SignUp/>
    }])

export default router
