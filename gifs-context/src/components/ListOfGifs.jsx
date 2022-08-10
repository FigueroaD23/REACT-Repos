import React, {useEffect, useState} from 'react'
import getGifsService from "../services/getGifsService";
import Gif from "./Gif";
import {useParams} from 'react-router-dom'

const ListOfGifs = (props) => {    
    const {keyword} = useParams()    
    //const {keyword} = props.match.params    
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