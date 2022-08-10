const API_URL =  'https://api.giphy.com/v1/gifs/search?'
const API_KEY =  'EoqFY62lYQlr3yurnxLFYxzHqvRZaWEF'
export default async function({keyword = "morty"} = {}){    
    const apiURL = `${API_URL}api_key=${API_KEY}&q=${keyword}&limit=30&offset=0&rating=g&lang=en`
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

