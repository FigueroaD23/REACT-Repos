import { useEffect, useState } from "react"
import getGifsService from "./services/getGifsService";
const gifsPrueba = ['https://media0.giphy.com/media/19JSJ5ucu91R5D7a3w/giphy-downsized.gif?cid=0be19670p4oaxmnxrhi2571xypk2rpzduwys6xwnxh6xueoh&rid=giphy-downsized.gif&ct=g',
'https://media1.giphy.com/media/GRSnxyhJnPsaQy9YLn/giphy.gif?cid=0be19670p4oaxmnxrhi2571xypk2rpzduwys6xwnxh6xueoh&rid=giphy.gif&ct=g'
]

function App() {  
  const [valor, setValor] = useState(0);
  const [gifs, setGifs] = useState(gifsPrueba);
  const [linkAPI, setlinkAPI] = useState('https://api.giphy.com/v1/gifs/search?api_key=EoqFY62lYQlr3yurnxLFYxzHqvRZaWEF&q=goku&limit=25&offset=0&rating=g&lang=en');    
  const [keyword, setKeyWord] = useState('goku');

  useEffect(()=>{    
    getGifsService(linkAPI).then((gifsAPI)=>{
      console.log(gifsAPI)
        setGifs([])
        setGifs(gifsAPI)
    })
  },[linkAPI])

  return (
    <div className="container">
      <p>Hola mundo con React y Vite para practicar Context API y Router</p>
    {valor}

    {
      gifs.map((item,index)=>{
        return(
        <img width={60} height={40} src={item} alt={`gif de ${item}`} key={index} />)
      })
    }
    <button onClick={()=>{setlinkAPI("https://api.giphy.com/v1/gifs/search?api_key=EoqFY62lYQlr3yurnxLFYxzHqvRZaWEF&q=gears+of+war&limit=25&offset=0&rating=g&lang=en")}}>incrementar</button>
    </div>
  )
}

export default App
