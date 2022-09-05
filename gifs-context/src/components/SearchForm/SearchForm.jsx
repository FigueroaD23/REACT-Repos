import {memo} from "react";
import { useHistory } from "react-router-dom";
import useActualizarForm from "./hookForm";

const RATINGS = ["g","pg","pg-13","r"]

const SearchForm = ({initialKeyword=''}) => {        
    /* const [searchKey, setSearchKey] = useState(initialKeyword)
    const [times, setTimes] = useState(0) */
    // const [rating, setRating] = useState(RATINGS[0])
    const {searchKeyword,times,rating,changeKeyword,changeRating} = useActualizarForm({initialKeyword, initialRating:RATINGS[3]})
    
    
    const history = useHistory()
    const handleSubmit = (e)=>{
        e.preventDefault()
        //navegar a otra ruta
        history.push(`/search/${searchKeyword}/${rating}`)
    }
    const handleInputChange = (e)=>{   
        changeKeyword(e.target.value)
        // dispatch({type:ACTIONS.UPDATE_KEYWORD,payload:{keyword:e.target.value}})
        /* setSearchKey(e.target.value)
        setTimes(prev=>prev+1) */
    }        
    const handleSelectRating = (e)=>{
        changeRating(e.target.value)
        // setRating(e.target.value)
        // dispatch({type:ACTIONS.UPDATE_RATING,payload:{rating:e.target.value}})
    }        

    return (
    <form onSubmit={handleSubmit}>
        <input value={searchKeyword} style={{padding:'10px',border:'none',borderRadius:'3px'}} onChange={handleInputChange} type="text" name="keysearch" id="keysearch" placeholder="Buscar gif"/>
        {times}
        <select onChange={handleSelectRating} value={rating} style={{padding:'10px',border:'none',borderRadius:'3px', marginLeft:'10px'}}>
            <option disabled>Tipo de rating</option>
            {RATINGS.map((ratingMap,index)=>{return(<option key={index} >{ratingMap}</option>)})}
        </select>
        <button style={{padding:'10px',border:'none',borderRadius:'5px', background:'#00C5FF', marginLeft:'10px'}}>Buscar</button>
    </form>
    )
}
//hace una commparacion de props y si no cambian no va a renderizar de nuevo el componente gracias a React.memo
export default memo(SearchForm)