import { useReducer } from "react"

const ACTIONS = {
    UPDATE_KEYWORD:'actualizarKeyWordAndTimes',
    UPDATE_RATING:'actualizarRating'
}

/* LOGICA DEL REDUCER */
// Este es el switchh para el reducer de toda la vida
/* const reducer = (state,{type,payload})=>{
    switch (type) {
        case ACTIONS.UPDATE_KEYWORD:
            return {...state,
                keyword:payload.keyword,
                times:state.times + 1
            } 
        case ACTIONS.UPDATE_RATING:
            return{...state,
                rating:payload.rating                
            }        
        default:
            return state
    }
} */
// Se puede poner también dela siguiente forma:
// Se crea un objeto con lo que va a regresar cada caso de las actions
const ACTIONS_REDUCERS = {
    [ACTIONS.UPDATE_KEYWORD]: (state, payload) =>{
        return {...state,
            keyword:payload.keyword,
            times:state.times + 1
        }    
    },
    [ACTIONS.UPDATE_RATING]: (state, payload) =>{
        return{...state,
            rating:payload.rating
        }
    }
}
/* LOGICA DEL REDUCER */

const reducer = (state,{type,payload})=>{
    const actionReducer = ACTIONS_REDUCERS[type]
    return actionReducer ? actionReducer(state,payload) : state
}

export default function useActualizarForm({initialKeyword,initialRating}){
    const initialState = {
        keyword:initialKeyword,
        times:0,
        rating:initialRating
    }
    const [{keyword:searchKeyword,times,rating}, dispatch] = useReducer(reducer, initialState)    

    return {
        changeKeyword: (keyword) => dispatch({type:ACTIONS.UPDATE_KEYWORD,payload:{keyword:keyword}}),
        changeRating: (rating) => dispatch({type:ACTIONS.UPDATE_RATING,payload:{rating:rating}}),
        searchKeyword,times,rating
    }

}
