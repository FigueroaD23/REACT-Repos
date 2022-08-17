import {useEffect, useState,useContext} from 'react'
import getGifsService from "../services/getGifsService";
import GifContextdefault from "../context/GifContext";

const useGetGif = ({keyword,limit} = {keyword:'',limit:25}) => {    
    const {gifs,setGifs} = useContext(GifContextdefault)            
    const [errorAPI, setError] = useState({mensaje:"",isThereAnyError:false});
    const [loading, setLoading] = useState(false);

    useEffect(()=>{    
        let keywordToUse = keyword || localStorage.getItem("LastKeyUsed");
        if(keywordToUse==null) keywordToUse = "random"        
        setLoading(true)
        getGifsService({keyword:keywordToUse,limit})
        .then((gifsAPI)=>{          
          if(!Array.isArray(gifsAPI)){
            throw gifsAPI
          }
          if(Array.isArray(gifsAPI) && gifsAPI.length<=0){
            throw "No se encontraron gif con esta palabra buscada"
          }          
          setGifs([])
          setGifs(gifsAPI)
          setLoading(false)
          localStorage.setItem("LastKeyUsed",keywordToUse)
        }).catch((e)=>{
          console.log(e)
          setError({mensaje:e,isThereAnyError:true})
        })
    },[keyword])



  
    return {loading,errorAPI,gifs}
}

export default useGetGif