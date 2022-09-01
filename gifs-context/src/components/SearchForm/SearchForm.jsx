import { useState, memo} from "react";
import { useHistory } from "react-router-dom";

const RATINGS = ["g","pg","pg-13","r"]

const SearchForm = ({initialKeyword=''}) => {
    console.log("initial",initialKeyword)

    const [searchKey, setSearchKey] = useState(initialKeyword)
    const [rating, setRating] = useState(RATINGS[0])
    const history = useHistory()
    const handleSubmit = (e)=>{          
        e.preventDefault()
        //navegar a otra ruta
        history.push(`/search/${searchKey}/${rating}`)
    }
    const handleInputChange = (e)=>{          
        setSearchKey(e.target.value)
    }        
    const handleSelectRating = (e)=>{   
        console.log(e.target)       
        console.log(e.target.value)       
        setRating(e.target.value)
    }        

    return (
    <form onSubmit={handleSubmit}>
        <input value={searchKey} style={{padding:'10px',border:'none',borderRadius:'3px'}} onChange={handleInputChange} type="text" name="keysearch" id="keysearch" placeholder="Buscar gif"/>
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