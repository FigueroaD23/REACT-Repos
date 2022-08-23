import {Link} from "react-router-dom"
import "../Spinner/Spinner.css"
import "../Gif/Gif.css"
import { useEffect, useRef } from "react"
const Gif = ({url,id,title}) => {    
  useEffect(() => {  
      //setTimeout(()=>{gifRef.current.style.animation = "unset"},200)
      setTimeout(()=>{gifRef.current.children[1].style.animation = "unset"},2000)
  }, [])
  
  const gifRef = useRef()
  
  return (
    <>
        <Link to={`/gif/${id}`} className={`gif visible`} ref={gifRef}>
            <p>{title}</p>
            <img className='skeleton'  src={url} alt={`gif de ${title}`} key={id} />
        </Link> 
    </>
  )
}

export default Gif