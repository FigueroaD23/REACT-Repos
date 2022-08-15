import { API_KEY, API_URL, TRENDING_SEARCH } from "./settings";

export default async function getTrendingSearches({keyword,limit} = {keyword:'Morty',limit:10}){    
    const apiURL = `${API_URL}${TRENDING_SEARCH}api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=0&rating=g&lang=en`
    try {
        const dataFirst = await fetch(apiURL)
        const gifs = await dataFirst.json()
        const gifsAPI = gifs.data.map((gif) => {
            const {images,title,id} = gif
            const {url} = gif.images.fixed_width_downsampled
            return {url,images,title,id}
        })
        return gifsAPI
    } catch (e) {
        return e
    }
}

