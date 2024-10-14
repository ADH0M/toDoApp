import React, { createContext, useReducer, useRef, useState } from "react";
import { Outlet } from "react-router-dom";

const initialstate = { auth:true , data : [{ id:1 , text:'my name is ali sayed'  , update:false } ] }

export const themeContext = createContext('null');


const ToDoList = () => {
    const [isEdit , setEdit ] = useState(false);
    const [inputText , setText ] = useState('');

    const reducer = ( state , action ) => {
        switch(action.type){
            case 'add':
                return  { ...state , data:[...state.data ,{  id:state.data.length + 1 , text:action.text }] };

            case 'delete':
                const data = state.data.filter(item => item.id !== action.id)
                return {...state , data };
            
            case 'edit':
                const item = state.data.map((item) => item.id=== action.id ? {...item , text:action.text } : item  );
                
                return {...state, data:item };

            default:
                return state;
        };
    };
    
    const [state , dispatch] = useReducer( reducer , initialstate );

    function addText(text){
        dispatch({type:'add' ,text })
    };
    
    function deleteText(id){
            return dispatch({type:'delete' , id })        
        };
    
    
    function edit(id , text ){
            dispatch({type:'edit' , id , text })        
        };
    
    
    return (
        <div className="flex justify-center  items-center h-screen">
            <themeContext.Provider value={{name:'ali'}}>

                <div className="bg-gray-400 p-8   rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold  text-center mb-4">To-Do List</h2>
                <div className="flex items-center  mb-4">
                <input
                    type="text"
                    id="field"
                    className="border rounded-md p-2 w-full mr-2 focus:outline-blue-500"
                    value={inputText}
                    onChange={(e)=> {e.preventDefault(); setText(e.target.value)}}
                />
                <button
                    type="button"
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600" onClick={()=>addText(inputText)}>
                    Add
                </button>
                </div>
                
                <table className="border w-full">
                    <thead  className="border">
                        <tr>
                            <th className="border">Id</th>
                            <th>text</th>
                            <th>action</th>
                        </tr>
                    </thead>
                    <tbody >
                        {state.data.length > 0 ? state.data.map(item => 
                            <tr className="text-center" key = { item.id } >
                                <td  className="border">{ item.id } </td>
                                {isEdit ? 
                                    <td>
                                        <input type="text" value={item.text} onChange={(e)=> edit( item.id , e.target.value ) } /> 
                                    </td>
                                    :
                                    <td    className="border"> { item.text } </td>}
                                <td className="border" >
                                    {isEdit ? <button onClick={()=> {
                                            setEdit(false)
                                        }}  className="bg-blue-600 text-white px-1 py-1 mx-1 my-1 rounded-md hover:bg-blue-400" >
                                        Save
                                    </button>:
                                    <button  onClick={()=> { 
                                        
                                            setEdit(true)
                                        }} className="bg-blue-600 text-white px-1 py-1 mx-1 my-1 rounded-md hover:bg-blue-400" >
                                        Edit
                                    </button>
                                    }
                                    <button  className="bg-red-600 text-white px-2 py-1 mx-1 my-1 rounded-md hover:bg-red-400"
                                    onClick={ ()=> deleteText(item.id) } >Delete</button>
                                </td>
                            </tr> 
                        ):
                        <tr>
                            <td className="text-center">
                                no data
                            </td>
                        </tr>
                    }
                    </tbody>
                </table>
                <Outlet/>
                </div>
                
            </themeContext.Provider>
        
        </div>

  );
};

export default ToDoList;
