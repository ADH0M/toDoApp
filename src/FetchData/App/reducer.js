import { useReducer , useState } from "react";

export const initialState ={
    loading:true ,
    error:false  ,
    data :{}     ,
} ;

const useGetApi = (  ) => {

    const [pokemon , setPokemon ] = useState({});
    const getData = async ()=>{
        const req = await fetch('https://pokeapi.co/api/v2/pokemon') 
        const data = await req.json()
        return setPokemon(data)
    }
    return true;


}


export default useGetApi