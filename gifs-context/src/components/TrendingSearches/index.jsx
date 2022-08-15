import React, { useState, useEffect} from 'react'
import Category from '../Category/Category'
import getTrendingSearches from "../../services/getTrendingSearches";
import "../Gif/Gif.css"
const TrendingSearches = () => {
    const [trends, setTrendings] = useState(["a","b"])    
    useEffect(() => {
      getTrendingSearches()
      .then((trendsAPI)=>{
        console.log(trendsAPI)
        setTrendings(trendsAPI.data)
      })      

    },[])
    
  return (
  <Category name={"Desde la API"} options={trends}/>
  )
}

export default function LazyTrending(){
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onChange = (entries)=>{      
      const elemento =  entries[0]
      if(elemento.isIntersecting){
        setShow(true)
        document.getElementById("LazyTrending").classList.remove("visible")
        
        console.log( document.getElementById("LazyTrending").classList)
      }
    }

    const observer = new IntersectionObserver(onChange,{
      rootMargin:'10px'
    })

    observer.observe(document.getElementById("LazyTrending"))
      
  },[])
  
  return <div id="LazyTrending">
    {show?<TrendingSearches/> : null }
  </div>
}