import React, { useState, useEffect} from 'react'
import Category from '../Category/Category'
import getTrendingSearches from "../../services/getTrendingSearches";

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

export default TrendingSearches