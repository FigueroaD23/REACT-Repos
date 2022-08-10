import React from 'react'

const Gif = ({url,id,title}) => {
  return (
    <>
        <div className="gif">
            <p>{title}</p>
            <img width={120} height={80} src={url} alt={`gif de ${title}`} key={id} />
        </div> 
    </>
  )
}

export default Gif