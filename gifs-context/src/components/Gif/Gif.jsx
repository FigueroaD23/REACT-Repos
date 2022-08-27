import {Link} from "react-router-dom"
import "../Spinner/Spinner.css"
import "../Gif/Gif.css"
import { useEffect, useRef } from "react"
import useInterObserver from "../../hooks/useInterObserver";
const Gif = ({url,id,title}) => {    
  useEffect(() => {  
      //setTimeout(()=>{gifRef.current.style.animation = "unset"},200)
      setTimeout(()=>{
        if(gifRef.current!=null)
        gifRef.current.style.animation = "unset"
      },2000)
  }, [])
  
  const gifRef = useRef()  
  const {show} = useInterObserver({distance:'0px',externalRef:gifRef,once:false})
  
  return (
    <>    
        <Link to={`/gif/${id}`} className={`gif ${show?'visible':null}`}>
            <img className='skeleton'  src={url} alt={`gif de ${title}`} key={id} ref={gifRef}/>
            <p>{title}</p>
        </Link> 
    </>
  )
}

export default Gif