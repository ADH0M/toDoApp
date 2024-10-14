import React, { useState } from 'react'

const Books = () => {
    const [book ,setBooks ]  = useState(0);
    const handleDecrease=(value)=>{
         if(value ==='decre'){
            return setBooks(book - 1 );
         };
         if(value ==='incre'){
            return setBooks(book + 1 );
         };
         if(value ==='reset'){
            return setBooks(0);
         }
        throw new Error('action not difine');
    }
    
  return (
    <div>
        <p>value :{book}</p>
        <input type="text" />
        <button type='button' className='p-2 bg-blue-600 m-2' disabled={ book === 0 } onClick={()=>{ handleDecrease('decre')} }>decre</button>
        <button type='button' className='p-2 bg-gray-700 text-white m-2' onClick={()=>{ handleDecrease('reset')}}>reset</button>
        <button type='button'className='p-2 bg-blue-600 m-2'  onClick={()=>{ handleDecrease('incre')}}>incre</button>
    </div>
  )
}

export default Books
