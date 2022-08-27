import { useContext, useEffect, useState} from 'react';
import { useParams } from 'react-router-dom'
import GifContextdefault from "../../context/GifContext";
import getGifEspecifico from "../../services/getGifEspecifico";
import Gif from "../../components/Gif/Gif";

export default function GifEspecifico() {
  const {gifs} = useContext(GifContextdefault)
    //console.log(gifs)    
    const {id} = useParams()
    const [gif,setGif] = useState([])
    const gifEspecifico = gifs.find((singleGif)=> singleGif.id === id)    
    const [loading, setLoading] = useState(false);        
    useEffect(() => {
      if(gifEspecifico){
        setGif(gifEspecifico)
        return
      }
      setLoading(true)
      getGifEspecifico({id}).then((gifAPI)=>{
        const gifdestructured =         
        setGif(gifAPI)   
        setLoading(false)
      })
    }, [id])
    
  return (
    <>
    <div className='contenedor-idespecifico'>
      <div className='imagenes'>
        <img src={gif.url} alt="" />
      </div>
      <div className='descripcion'>
        <h1>{gif.title}</h1>
      </div>
    </div>
    </>
  )
}