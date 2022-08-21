import { useState, useEffect, useCallback} from 'react'
import Category from '../Category/Category'
import getTrendingSearches from "../../services/getTrendingSearches";
const TrendingSearches = () => {
  const [trends, setTrendings] = useState([])    
  useEffect(() => {
    getTrendingSearches().then(trendsAPI=>setTrendings(trendsAPI.data))      
  },[])
  
    return <Category name={"Busquedas populares"} options={trends}/>  
}

export default TrendingSearches