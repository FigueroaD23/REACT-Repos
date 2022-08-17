import { useState, useEffect, useRef} from 'react'

export default function useCercaPantalla({distance} = {distance:'10px'}){
    const [show, setShow] = useState(false)
    const refFromHook = useRef()
    useEffect(() => {
      const observandoFunction = (entries,observer)=>{      
        const elemento =  entries[0]
        console.log(elemento.isIntersecting)
        if(elemento.isIntersecting){
          setShow(true)
          observer.disconnect()
        }
      }
  
      const observer = new IntersectionObserver(observandoFunction,{
        rootMargin:distance
      })
  
      observer.observe(refFromHook.current)
        
      return()=> observer.disconnect()
    },[])
  
    return {show,refFromHook}
  }