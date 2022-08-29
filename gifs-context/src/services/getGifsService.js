import { API_KEY, API_URL, GET_GIF } from "./settings";

export default async function getGifService({keyword='Morty',limit=5, page=0} = {}){  
    let offset = page*limit  
    const apiURL = `${API_URL}${GET_GIF}?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=${offset}&rating=g&lang=en`
    try {
        const dataFirst = await fetch(apiURL)        
        if(dataFirst.status == 401) throw "Error de autorización, checar api KEY"
        const gifs = await dataFirst.json()
        const gifsArray = gifs.data.map((gif) => {
            const {images,title,id} = gif
            const {url} = gif.images.fixed_width_downsampled
            return {url,images,title,id}
        })
        const offsetAPI = gifs.pagination?.total_count
        return {gifsArray,offsetAPI}
    } catch (e) {
        return e
    }
}

