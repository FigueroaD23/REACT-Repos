import React, {useEffect, useState} from 'react'
import getGifsService from "../services/getGifsService";
import Gif from "./Gif";
import {useParams} from 'react-router-dom'
import Skeleton from './Skeleton/Skeleton';

const ListOfGifs = (props) => {    
    const {keyword} = useParams()    
    //const {keyword} = props.match.params    
    const [gifs, setGifs] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(()=>{    
      setLoading(true)
        getGifsService({keyword}).then((gifsAPI)=>{
          console.log(gifsAPI)
          setGifs([])
          setGifs(gifsAPI)
          setLoading(false)
        })
    },[keyword])
  return (    
    <>    
    {loading?<Skeleton/>:gifs.map(({url,id,title})=>{
                return(<Gif url={url} id={id} title={title} key={id} loading={loading}/>)
            })}
        
    </>
  )
}

export default ListOfGifs