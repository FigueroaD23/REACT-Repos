import { useState } from 'react';
import {useEffect} from 'react'
import { useParams } from 'react-router-dom'
import getGifEspecifico from "../services/getGifEspecifico";

export const GifEspecifico = () => {
    const {id} = useParams()
    const [gif,setGif] = useState([])
    useEffect(() => {
      getGifEspecifico({id}).then((gifAPI)=>{
        setGif(gifAPI)   
      })
    }, [id])
    

  return (
    <div>
        <div className="gif">
            <p>{gif.title}</p>
            <img width={120} height={80} src={gif.url} alt={`gif de ${gif.title}`} key={gif.id} />
        </div> 
    </div>
  )
}
