export default async function(linkAPI){
    try {
        const dataFirst = await fetch(linkAPI)
        const gifs = await dataFirst.json()
        const gifsAPI = gifs.data.map((gif) => {
            return gif.images.fixed_width_downsampled.url
        })
        return gifsAPI
    } catch (e) {
        return e
    }
}

