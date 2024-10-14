export const initialState = {
    loading:true,
    data :[] , 
    error:''
}

const reducer = ( state , action ) => {
    switch(action.type){
        case 'pending':{
            return true
        }
        
        case 'fullfialed':{
            return true
        }

        default:{
            return true
        }
    };
};

export default reducer