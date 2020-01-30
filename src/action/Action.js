import{ADD_CARD,DELETE_CARD,EDIT_CARD,SEARCH_CARD,SEARCH_STAR,FETCH_MOVIES} from './ActionType'
import axios from 'axios'
export const addCard=(movie)=>(
    {type:ADD_CARD, 
        //  payload: {_id:Date.now(),title,year,images,rating,movieDescription}<
        payload:movie
    }
  )
  export const deleteCard=(id)=>(
    {type:DELETE_CARD,
     payload:id
    }
  )

  export const editCard=(id,newMovie)=>(
    {type:EDIT_CARD,
      payload:{id,newMovie}
    }
)
export  const searchCard=(movieName)=>({
  type: SEARCH_CARD,
  payload:movieName
})
export  const searchStar=(rating)=>({
  type: SEARCH_STAR,
  payload:rating
})
export const fetchMovie=()=>dispatch=>{
  
  axios({ method: 'get', url: 'https://tv-v2.api-fetch.website/movies/1' })
  .then(res => res.data)
  .then(data => {
    console.log(data);
    dispatch({
      type: FETCH_MOVIES,
      payload: data,
    });
  })
}