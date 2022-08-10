import React, {useEffect, useState} from 'react'
import getGifsService from "../services/getGifsService";
import Gif from "./Gif";

const ListOfGifs = ({keyword}) => {     
    const [gifs, setGifs] = useState([]);
    useEffect(()=>{    
        getGifsService({keyword}).then((gifsAPI)=>{
            console.log(gifsAPI)
            setGifs([])
            setGifs(gifsAPI)
        })
    },[keyword])
  return (    
    <>        
        {
            gifs.map(({url,id,title})=>{
                return(<Gif url={url} id={id} title={title} key={id}/>)
            })
        }
    </>
  )
}

export default ListOfGifs