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
  const keywordToUse = '' || localStorage.getItem("LastKeyUsed");
  console.log("to use",keywordToUse)

  const handleInputChange = (e)=>{
    setSearchKey(e.target.value)
  }
  
  const handleSubmit = (e)=>{
    history.push(/search/+searchKey)
    e.preventDefault();
  }
  if(errorAPI.isThereAnyError) return <h3>{errorAPI.mensaje}</h3>
  return (  
    <div>
      <form onSubmit={handleSubmit}>
        <input style={{padding:'10px',border:'none',borderRadius:'10px'}} onChange={handleInputChange} type="text" name="keysearch" id="keysearch" placeholder="Buscar gif"/>
      </form>
      
      <p>Última busqueda: <b>{keywordToUse == null ? "" : keywordToUse}</b></p>
      <div className="gifs-container" style={{minHeight:"500px"}}>
        {
          loading
          ?
          <Spinner/>
          :
          <>
            <ListOfGifs gifs={gifs}/>          
          </>
        }
      </div>

      <TrendingSearches/>
    </div>        
  )
}

export default Home