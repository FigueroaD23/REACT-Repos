
import useGetGif from "../../hooks/useGetGif";
import ListOfGifs from "../../components/ListOfGifs/ListOfGifs";
import Spinner from "../../components/Spinner/Spinner";
import TrendingSearches from "../../components/TrendingSearches/index";
import SearchForm from "../../components/SearchForm/SearchForm";

const Home = () => {  
  const {loading,errorAPI,gifs} = useGetGif()    
  const keywordToUse = '' || localStorage.getItem("LastKeyUsed");
  console.log("to use",keywordToUse)

  
  
  if(errorAPI.isThereAnyError) return <h3>{errorAPI.mensaje}</h3>
  return (    
    <>
    <SearchForm/>
    <div>      
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
    </>  
  )
}

export default Home