import ListOfGifs from "../../components/ListOfGifs/ListOfGifs";
import {useParams} from 'react-router-dom'
import Spinner from '../../components/Spinner/Spinner';
import useGetGif from "../../hooks/useGetGif";
import useInterObserver from "../../hooks/useInterObserver";
import { useCallback, useEffect, useRef} from 'react'
import debounce from "just-debounce-it";
const indexSearch = () => {     
  
  const {keyword} = useParams()  
  const escuchador = useRef()
  const {loading,errorAPI, gifs, setPage,loadingNextPage} = useGetGif({keyword,limit:5})
  const {show} = useInterObserver({distancia:'10px', externalRef: loading ? null : escuchador, once:false} )
  
  const debounceHandleNextPage = useCallback(
    ()=>{debounce(setPage((prev)=>{return prev+1}), 1000)
  },[])  

  useEffect(() => {
   if(show) debounceHandleNextPage()        
  },[debounceHandleNextPage, show])
  
  /* const handleNextPage = ()=>{
    console.log("siguiente página")
    setPage((prev)=>{return prev+1})
  } */

  //const {keyword} = props.match.params  //este tambien sirve
  if(errorAPI.isThereAnyError){
    return (<p>Error: {errorAPI.mensaje}</p>)    
  }
  if(gifs.length>0){
    return (    
      <>    
      <h3 style={{margin:'0'}}>{keyword}</h3>
      {
        loading
        ? <Spinner/>
        : <>          
            <ListOfGifs gifs={gifs}/>
            <div style={{height:'80px'}} ref={escuchador}>escuchador</div>
          </> 
      }
      {/* <button onClick={handleNextPage}>Más resultados</button> */}
      </>
    )
  }  
}

export default indexSearch