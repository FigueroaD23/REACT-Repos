import { useState, useEffect, useRef} from 'react'

export default function useCercaPantalla({ distancia = '100px', externalRef, once = true } = {}){
  
    const [show, setShow] = useState(false)
    const refFromHook = useRef()
    useEffect(() => { 
      const element = externalRef? externalRef.current : refFromHook.current      
      const observandoFunction = (entries,observer)=>{      
        const el = entries[0]
        if (el.isIntersecting) {          
          setShow(true)
          once && observer.disconnect()
        } else {          
          !once && setShow(false)
        }
      }
  
      const observer = new IntersectionObserver(observandoFunction,{
        rootMargin:distancia
      })
      if(element) observer.observe(element)
        
      return()=> observer && observer.disconnect()
    })
  
    return {show,refFromHook}
  }