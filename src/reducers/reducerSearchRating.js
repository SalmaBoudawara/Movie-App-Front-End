import{SEARCH_STAR} from '../action/ActionType'

export const reducerSearchRating=(state="",action)=>{
    switch(action.type){

        case SEARCH_STAR:
            
            return(action.payload);

    
      default:

             return state;  
    }
}