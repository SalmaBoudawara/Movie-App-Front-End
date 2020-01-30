import{ADD_CARD,DELETE_CARD,EDIT_CARD,FETCH_MOVIES} from '../action/ActionType'
const movieList=[]
export const reducerMovie=(state=movieList,action)=>{
    switch(action.type){
        case ADD_CARD:
            return(state.concat(action.payload));
       
        case DELETE_CARD:
            // return(state.filter(el=>el._id!==action.payload));
            return[...state.filter(el=>el._id!==action.payload)]
            
          
        case EDIT_CARD:
            return state.map(el =>el._id === action.payload.id ? {...el}= { ...action.payload.newMovie } : el);
        case FETCH_MOVIES:
            return action.payload;    
        default:
            return state;  
    }

}