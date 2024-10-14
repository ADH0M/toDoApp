import React, { useEffect, useReducer, useState } from 'react'


const ProductsPage = () => {
    const initialState = {
        loading : true , 
        data : [] ,
        error:''
    };

    const reducer = (state ,action )=>{
        switch(action.type){

            case 'pending':{
                return state;
            }

            case 'fullfiled':{ return {...state , data:action.payload }}
            case 'rejected':{ return {...state ,data:'' ,error:action.payload }}

            default:
                return state

        }
    };

    const [Pdata , setPData] = useState([]);

    const [state  , dispatch ] = useReducer(reducer , initialState);

    useEffect(()=>{
        const fetchReducer  = async ()=>{
            const controller = new AbortController();
            const signal  = controller.signal
            try{
                const res = await fetch('https://pokeapi.co/api/v2/pokemon',{signal});
                const resData = await res.json() ;
                dispatch({type:'fullfiled', payload:resData });
            }catch(err){
                dispatch({type:'rejected', payload:'there is no data' });
    
            };
            return ()=>{
            };

            
        }
        fetchReducer();
    }, [])

    console.log(state);
    

    // useEffect(  ()=>{
    //     const fetchData = async () => {
    //         const controller = new AbortController('signal');
    //         const signal  = controller.signal
    //         try {
    //           const response = await fetch('https://pokeapi.co/api/v2/pokemon',{signal});
    //           const result = await response.json();
    //           setPData(result.results);
    //         } catch (error) {
    //           console.error('Error fetching data:', error);
    //         }
    //         return ()=>{
    //             controller.abort();
    //         }
    //       };

    //     fetchData();

    // } ,[])

    
    
    
  return (
    <div className='bg-slate-400 w-full h-full flex flex-col flex-wrap justify-center items-center '>
        {/* {Pdata.length >= 1 && Pdata.map((item)=>( 
            <div key={item.name} >{item.name}</div>
         ))} */}
    </div>

    // {Pdata ? <pre>{JSON.stringify(Pdata, null, 2)}</pre> : <p>Loading...</p>}

  )
}

export default ProductsPage
