import { API_KEY, API_URL, TRENDING_SEARCH } from "./settings";

export default async function getTrendingSearches(){    
    const apiURL = `${API_URL}${TRENDING_SEARCH}?api_key=${API_KEY}`
    try {
        const dataFirst = await fetch(apiURL)
        const trends = await dataFirst.json()        
        return trends
    } catch (e) {
        return e
    }
}

