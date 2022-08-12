import React from 'react'
import {Link} from "react-router-dom"
const Gif = ({url,id,title}) => {
  return (
    <>
        <Link to={`/gif/${id}`} className="gif">
            <p>{title}</p>
            <img src={url} alt={`gif de ${title}`} key={id} />
        </Link> 
    </>
  )
}

export default Gif