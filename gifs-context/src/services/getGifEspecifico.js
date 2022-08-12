const API_URL =  'https://api.giphy.com/v1/gifs/'
const API_KEY =  'EoqFY62lYQlr3yurnxLFYxzHqvRZaWEF'

export default async function({id = ""} = {}){    
    const apiURL = `${API_URL}${id}?api_key=${API_KEY}`
    try {
        const dataFirst = await fetch(apiURL)
        const gifEspecifico = await dataFirst.json()
        const {images,title,id} = gifEspecifico.data
        const {url} = gifEspecifico.data.images.fixed_width_downsampled
        return {url,images,title,id}
    } catch (e) {
        return e
    }
}
