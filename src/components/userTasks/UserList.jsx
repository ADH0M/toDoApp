import React from 'react'

const UserList = ({tasks}) => {
    console.log("----------------",tasks);
  return (
    <div>
        <ul>
          {tasks.map(item=>(
            <li key={item.taskId}>{item.text}</li>
          ))}
        </ul>
    </div>
  )
}

export default UserList
