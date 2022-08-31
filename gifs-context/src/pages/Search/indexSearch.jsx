import ListOfGifs from "../../components/ListOfGifs/ListOfGifs";
import {useParams} from 'react-router-dom'
import Spinner from '../../components/Spinner/Spinner';
import useGetGif from "../../hooks/useGetGif";
import useInterObserver from "../../hooks/useInterObserver";
import { useCallback, useEffect, useRef} from 'react'
import debounce from "just-debounce-it";
import SearchForm from "../../components/SearchForm/SearchForm";
const indexSearch = () => {     
  
  const {keyword} = useParams()  
  const escuchador = useRef()
  const {loading,errorAPI, gifs, setPage,loadingNextPage, offset} = useGetGif({keyword})
  const {show} = useInterObserver({distancia:'10px', externalRef: loading ? null : escuchador, once:false} )
  
  const debounceHandleNextPage = useCallback(
    ()=>{debounce(setPage((prev)=>{return prev+1}), 2000)
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
    return <>
      <SearchForm/>
      <p>Error: {errorAPI.mensaje}</p>
    </>        
  }
  if(gifs.length>0){
    return (    
      <>    
      <SearchForm/>
        <h3 style={{margin:'0'}}>{offset} resultados para {keyword}</h3>      
        {
          loading
          ? <Spinner/>
          : <>          
              <ListOfGifs gifs={gifs}/>
              <div style={{height:'80px'}} ref={escuchador}>
                {loadingNextPage==='cargando'?'cargando':<h6 style={{marginTop:'-20px', marginBottom:'0'}}>Mostrando {gifs.length} resultados de {offset}.</h6>}
              </div>
            </> 
        }      
        {/* <button onClick={handleNextPage}>Más resultados</button> */}
      </>
    )
  }  
}

export default indexSearch