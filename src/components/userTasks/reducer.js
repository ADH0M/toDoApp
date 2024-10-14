export const initailState = [{id:1 , text:'ali mohamed ali ..'}]

const reducer = ( state , action ) => {
    switch (action.type){
        case "AddTask" : {
            state.push({ id:state.length + 1 , text:action.text });
            return [...state ] ;
          }
        default:
            return state ;
    }
}

export default reducer;
