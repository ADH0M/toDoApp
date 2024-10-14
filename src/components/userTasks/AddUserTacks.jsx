import React, { useState } from 'react'

const AddUserTacks = ({addTask}) => {
    const [text , setText] = useState('');

    return (
    <div>
        <input type="text"  value={text} onChange={(e)=> setText(e.target.value)} />
        <button onClick={()=> addTask(text) }>add</button>
    </div>
  )
}

export default AddUserTacks
