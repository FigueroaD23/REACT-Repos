import React, {useEffect, useState} from 'react'
import getGifsService from "../../services/getGifsService";
import Gif from "../Gif/Gif";
import {useParams} from 'react-router-dom'
import Spinner from '../Spinner/Spinner';

const ListOfGifs = () => {    
    const {keyword} = useParams()    
    //const {keyword} = props.match.params    
    const [gifs, setGifs] = useState([]);
    const [errorAPI, setError] = useState({mensaje:"",isThereAnyError:false});
    const [loading, setLoading] = useState(false);
    useEffect(()=>{    
      setLoading(true)
        getGifsService({keyword}).then((gifsAPI)=>{
          if(!Array.isArray(gifsAPI)){
            throw "Hubo un problema al conectarse a la API"
          }
          if(gifsAPI.length<=0){
            throw "No se encontraron gif con esta palabra buscada"
          }
          console.log(gifsAPI)
          setGifs([])
          setGifs(gifsAPI)
          setLoading(false)
        }).catch((e)=>{
          console.log(e)
          setError({mensaje:e,isThereAnyError:true})
        })
    },[keyword])
  if(errorAPI.isThereAnyError){
    return (<p>Error: {errorAPI.mensaje}</p>)    
  }
  if(gifs.length>0){
    return (    
      <>    
      {loading?<Spinner/>:gifs.map(({url,id,title})=>{
                  return(<Gif url={url} id={id} title={title} key={id} />)
              })}
          
      </>
    )
  }  
}

export default ListOfGifs