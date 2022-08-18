import ListOfGifs from "../../components/ListOfGifs/ListOfGifs";
import {useParams} from 'react-router-dom'
import Spinner from '../../components/Spinner/Spinner';
import useGetGif from "../../hooks/useGetGif";

const indexSearch = () => {    
  const handleNextPage = ()=>{
    console.log("siguiente página")
    setPage((prev)=>{return prev+1})
  }
  const {keyword} = useParams()  
  const {loading,loadingNextPage,errorAPI, gifs, setPage} = useGetGif({keyword,limit:10})
  //const {keyword} = props.match.params  //este tambien sirve
  if(errorAPI.isThereAnyError){
    return (<p>Error: {errorAPI.mensaje}</p>)    
  }
  if(gifs.length>0){
    return (    
      <>    
      <h3>{keyword}</h3>
      {loading || loadingNextPage?<Spinner/>:<ListOfGifs gifs={gifs}/>}
      <button onClick={handleNextPage}>Más resultados</button>
      </>
    )
  }  
}

export default indexSearch