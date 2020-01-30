import {reducerMovie} from './Reducer'
import {reducerSearch} from './reducersSearch'
import{reducerSearchRating} from './reducerSearchRating'
import { combineReducers} from 'redux'
 export const rootReducer = combineReducers({reducerMovie,reducerSearch,reducerSearchRating})
