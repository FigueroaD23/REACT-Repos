import { useState } from "react";
import { useHistory } from "react-router-dom";
import useGetGif from "../../hooks/useGetGif";
import ListOfGifs from "../../components/ListOfGifs/ListOfGifs";
import Spinner from "../../components/Spinner/Spinner";
import TrendingSearches from "../../components/TrendingSearches/index";

const Home = () => {
  const [searchKey, setSearchKey] = useState("")
  const history = useHistory()  
  const {loading,errorAPI,gifs} = useGetGif()


  const handleInputChange = (e)=>{
    setSearchKey(e.target.value)
  }
  
  const handleSubmit = (e)=>{
    history.push(/search/+searchKey)
    e.preventDefault();
  }
  return (  
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={handleInputChange} type="text" name="keysearch" id="keysearch" placeholder="Buscar gif"/>
      </form>
      
      <p>Última busqueda</p>
      {loading?<Spinner/>:<ListOfGifs gifs={gifs}/>}

      <TrendingSearches/>
    </div>        
  )
}

export default Home