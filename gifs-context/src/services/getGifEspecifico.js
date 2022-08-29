const API_URL =  'https://api.giphy.com/v1/gifs/'
const API_KEY =  'EoqFY62lYQlr3yurnxLFYxzHqvRZaWEF'

export default async function({id = ""} = {}){    
    const apiURL = `${API_URL}${id}?api_key=${API_KEY}`
    try {
        const dataFirst = await fetch(apiURL)
        console.log("PETICION STATUS",dataFirst.status)
        if(dataFirst.status===404){
            return{error:"No se encontró algún gif con ese ID"}
        }
        const gifEspecifico = await dataFirst.json()
        const {images,title,id} = gifEspecifico.data
        const {url} = gifEspecifico.data.images.fixed_width_downsampled
        return {images,title,id,url}
    } catch (e) {
        return e
    }
}
