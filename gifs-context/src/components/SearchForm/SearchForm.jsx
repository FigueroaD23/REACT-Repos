import { useState, memo} from "react";
import { useHistory } from "react-router-dom";
const SearchForm = () => {
    const [searchKey, setSearchKey] = useState("")
    const history = useHistory()
    const handleSubmit = (e)=>{          
        e.preventDefault()
        //navegar a otra ruta
        history.push(`/search/${searchKey}`)
    }
    const handleInputChange = (e)=>{          
        setSearchKey(e.target.value)
    }        

    return (
    <form onSubmit={handleSubmit}>
        <input style={{padding:'10px',border:'none',borderRadius:'10px'}} onChange={handleInputChange} type="text" name="keysearch" id="keysearch" placeholder="Buscar gif"/>
        <button style={{padding:'10px',border:'none',borderRadius:'10px', background:'lightblue', marginLeft:'10px'}}>Buscar</button>
    </form>
    )
}
//hace una commparacion de props y si no cambian no va a renderizar de nuevo el componente gracias a React.memo
export default memo(SearchForm)