import ListOfGifs from "../../components/ListOfGifs/ListOfGifs";
import {useParams} from 'react-router-dom'
import Spinner from '../../components/Spinner/Spinner';
import useGetGif from "../../hooks/useGetGif";

const indexSearch = () => {    
  const {keyword} = useParams()  
  const {loading,errorAPI, gifs} = useGetGif({keyword,limit:30})
  //const {keyword} = props.match.params  //este tambien sirve
  if(errorAPI.isThereAnyError){
    return (<p>Error: {errorAPI.mensaje}</p>)    
  }
  if(gifs.length>0){
    return (    
      <>    
      <h3>{keyword}</h3>
      {loading?<Spinner/>:<ListOfGifs gifs={gifs}/>}
          
      </>
    )
  }  
}

export default indexSearch