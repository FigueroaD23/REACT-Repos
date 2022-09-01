import {useEffect, useState,useContext} from 'react'
import getGifsService from "../services/getGifsService";
import GifContextdefault from "../context/GifContext";

//esta linea es lo mismo que la de abajo pero con otra sintaxis
//const useGetGif = ({keyword,limit} = {keyword:'',limit:10}) => {    
const useGetGif = ({keyword,limit,rating} = { keyword: null }) => {    
  const [page, setPage] = useState(0)
  const [offset, setOffset] = useState(0)
  const {gifs,setGifs} = useContext(GifContextdefault)            
  const [errorAPI, setError] = useState({mensaje:"",isThereAnyError:false});
  const [loading, setLoading] = useState(false);
  const [loadingNextPage, setLoadingNextPage] = useState('');
  let keywordToUse = keyword || localStorage.getItem("LastKeyUsed");

  useEffect(()=>{       
    setError({mensaje:"",isThereAnyError:false}) 
      if(gifs.length>0 && page>0) setPage(0)   
      if(keywordToUse==null) keywordToUse = "popular"        
      setLoading(true)
      getGifsService({keyword:keywordToUse,limit,rating})
      .then((gifsAPI)=>{   
        setGifs([])
        console.log("respuesta",gifsAPI)    
        if(gifsAPI.offsetAPI) setOffset(gifsAPI.offsetAPI)
        if(!Array.isArray(gifsAPI.gifsArray)){
          throw "Error al consultar la API"
        }
        if(Array.isArray(gifsAPI.gifsArray) && gifsAPI.gifsArray.length<=0){
          console.log(gifsAPI.gifsArray)
          throw "No se encontraron gif con esta palabra buscada"
        }
        //setGifs([])
        setGifs(gifsAPI.gifsArray)
        setLoading(false)
        localStorage.setItem("LastKeyUsed",keywordToUse)
      }).catch((e)=>{
        console.log("error desde el custom hook",e)
        setError({mensaje:e,isThereAnyError:true})
      })
  },[keyword, keywordToUse,rating])

  useEffect(() => {         
    console.log("lenght", gifs.length)
    console.log("page", page)
    console.log("offsetEFECT", offset)
    if(page===0 || gifs.length >= offset){
      setLoadingNextPage('Ya no hay más')
      return
    }
    setLoadingNextPage('cargando')
    getGifsService({keyword:keywordToUse,limit,page,rating})
      .then((gifsAPI)=>{
        setGifs(prev => prev.concat(gifsAPI.gifsArray)); console.log("gifs actuales",gifs)
        setLoadingNextPage('false')
      })
  }, [page])
  



  return {loading,loadingNextPage,errorAPI,gifs,setPage,offset}
}

export default useGetGif