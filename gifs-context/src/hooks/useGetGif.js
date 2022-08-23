import {useEffect, useState,useContext} from 'react'
import getGifsService from "../services/getGifsService";
import GifContextdefault from "../context/GifContext";

//esta linea es lo mismo que la de abajo pero con otra sintaxis
//const useGetGif = ({keyword,limit} = {keyword:'',limit:10}) => {    
const useGetGif = ({keyword='',limit="3"} = {}) => {    
    const [page, setPage] = useState(0)
    const {gifs,setGifs} = useContext(GifContextdefault)            
    const [errorAPI, setError] = useState({mensaje:"",isThereAnyError:false});
    const [loading, setLoading] = useState(false);
    const [loadingNextPage, setLoadingNextPage] = useState(false);
    let keywordToUse = keyword || localStorage.getItem("LastKeyUsed");

    useEffect(()=>{    
        if(keywordToUse==null) keywordToUse = "random"        
        setLoading(true)
        getGifsService({keyword:keywordToUse,limit})
        .then((gifsAPI)=>{          
          if(!Array.isArray(gifsAPI)){
            throw "Error al consultar la API"
          }
          if(Array.isArray(gifsAPI) && gifsAPI.length<=0){
            throw "No se encontraron gif con esta palabra buscada"
          }          
          setGifs([])
          setGifs(gifsAPI)
          setLoading(false)
          localStorage.setItem("LastKeyUsed",keywordToUse)
        }).catch((e)=>{
          console.log("error desde el custom hook",e)
          setError({mensaje:e,isThereAnyError:true})
        })
    },[keyword,setGifs, keywordToUse])

    useEffect(() => {
      if(page===0 ) return
      setLoadingNextPage(true)
      getGifsService({keyword:keywordToUse,limit,page})
        .then((gifsAPI)=>{
          setGifs(prev => prev.concat(gifsAPI)); console.log(gifs)
          setLoadingNextPage(false)
        })
    }, [page])
    


  
    return {loading,loadingNextPage,errorAPI,gifs,setPage}
}

export default useGetGif