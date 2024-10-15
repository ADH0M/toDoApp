import React from 'react'
import { Provider } from 'react-redux'
import store from '../store'
import ProductsPage from './ProductsPage'

const Index = () => {
  return (
    <div className='flex flex-col w-full h-[100vh] justify-center items-center bg-gray-800 '>
      <Provider store={store}>
            <ProductsPage/>
      </Provider>
    </div>
  )
}

export default Index
