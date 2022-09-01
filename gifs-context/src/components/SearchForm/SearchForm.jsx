import { useState, memo, useReducer} from "react";
import { useHistory } from "react-router-dom";
const ACTIONS = {
    UPDATE_KEYWORD:'actualizarKeyWordAndTimes'
}
const RATINGS = ["g","pg","pg-13","r"]

const reducer = (state,{type,payload})=>{
    switch (type) {
        case ACTIONS.UPDATE_KEYWORD:
            return {...state,
                keyword:payload.keyword,
                times:state.times + 1
            }                
        default:
            return state
    }

}

const SearchForm = ({initialKeyword=''}) => {    
    const initialState = {
        keyword:initialKeyword,
        times:0
    }
    /* const [searchKey, setSearchKey] = useState(initialKeyword)
    const [times, setTimes] = useState(0) */
    const [rating, setRating] = useState(RATINGS[0])

    const [state, dispatch] = useReducer(reducer, initialState)
    const {keyword:searchKeyword,times} = state
    const history = useHistory()
    const handleSubmit = (e)=>{          
        e.preventDefault()
        //navegar a otra ruta
        history.push(`/search/${searchKeyword}/${rating}`)
    }
    const handleInputChange = (e)=>{   
        dispatch({type:ACTIONS.UPDATE_KEYWORD,payload:{keyword:e.target.value}})       
        /* setSearchKey(e.target.value)
        setTimes(prev=>prev+1) */
    }        
    const handleSelectRating = (e)=>{   
        setRating(e.target.value)
    }        

    return (
    <form onSubmit={handleSubmit}>
        <input value={searchKeyword} style={{padding:'10px',border:'none',borderRadius:'3px'}} onChange={handleInputChange} type="text" name="keysearch" id="keysearch" placeholder="Buscar gif"/>
        {times}
        <select onChange={handleSelectRating} style={{padding:'10px',border:'none',borderRadius:'3px', marginLeft:'10px'}}>
            <option disabled>Tipo de rating</option>
            {RATINGS.map((ratingMap,index)=>{return(<option key={index} value={ratingMap}>{ratingMap}</option>)})}
        </select>
        <button style={{padding:'10px',border:'none',borderRadius:'5px', background:'#00C5FF', marginLeft:'10px'}}>Buscar</button>
    </form>
    )
}
//hace una commparacion de props y si no cambian no va a renderizar de nuevo el componente gracias a React.memo
export default memo(SearchForm)