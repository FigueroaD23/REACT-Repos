import {useEffect, useState,useContext} from 'react'
import getGifsService from "../services/getGifsService";
import GifContextdefault from "../context/GifContext";

const useGetGif = ({keyword,limit} = {keyword:null,limit:5}) => {    
    const {gifs,setGifs} = useContext(GifContextdefault)            
    const [errorAPI, setError] = useState({mensaje:"",isThereAnyError:false});
    const [loading, setLoading] = useState(false);

    useEffect(()=>{    
        const keywordTosUe = keyword || localStorage.getItem("LastKeyUsed");
        console.log(keyword)
        setLoading(true)
        getGifsService({keyword:keywordTosUe,limit})
        .then((gifsAPI)=>{
          if(!Array.isArray(gifsAPI)){
            throw "Hubo un problema al conectarse a la API"
          }
          if(gifsAPI.length<=0){
            throw "No se encontraron gif con esta palabra buscada"
          }          
          setGifs([])
          setGifs(gifsAPI)
          setLoading(false)
          localStorage.setItem("LastKeyUsed",keyword)
        }).catch((e)=>{
          console.log(e)
          setError({mensaje:e,isThereAnyError:true})
        })
    },[keyword])



  
    return {loading,errorAPI,gifs}
}

export default useGetGif