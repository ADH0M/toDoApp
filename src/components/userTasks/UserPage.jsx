import React from 'react'
import reducer , {initailState} from './reducer'
import { useReducer } from 'react'
import AddUserTacks from './AddUserTacks';
import UserList from './UserList';



const UserPage = () => {
    const [state , dispatch] = useReducer( reducer , initailState );
    console.log(state);

    function addTask(task){
        dispatch({type:'AddTask' , text:task });
    };

    return (
        <div>
            <AddUserTacks addTask={addTask} />
            <UserList tasks={state} />
        </div>
    )
}

export default UserPage
