import React, { useEffect } from 'react'
import {Link} from "react-router-dom"
import "../Spinner/Spinner.css"
import "../Gif/Gif.css"
const Gif = ({url,id,title}) => {  
  return (
    <>
        <Link to={`/gif/${id}`} className={`gif visible`}>
            <p>{title}</p>
            <img className='skeleton'  src={url} alt={`gif de ${title}`} key={id} />
        </Link> 
    </>
  )
}

export default Gif