import { useEffect, useState } from "react"
import getGifsService from "./services/getGifsService";
const gifsPrueba = ['https://media0.giphy.com/media/19JSJ5ucu91R5D7a3w/giphy-downsized.gif?cid=0be19670p4oaxmnxrhi2571xypk2rpzduwys6xwnxh6xueoh&rid=giphy-downsized.gif&ct=g',
'https://media1.giphy.com/media/GRSnxyhJnPsaQy9YLn/giphy.gif?cid=0be19670p4oaxmnxrhi2571xypk2rpzduwys6xwnxh6xueoh&rid=giphy.gif&ct=g'
]

function App() {  
  const [gifs, setGifs] = useState(gifsPrueba);
  const [keyword, setKeyWord] = useState('goku');

  useEffect(()=>{    
    getGifsService({keyword}).then((gifsAPI)=>{
      console.log(gifsAPI)
        setGifs([])
        setGifs(gifsAPI)
    })
  },[keyword])

  return (
    <>    
      <p>Hola mundo con React y Vite para practicar Context API y Router</p>
      <button onClick={()=>{setKeyWord("spongebob")}}>incrementar</button>
    <div className="container">          

    {
      gifs.map((item)=>{
        return(
          <div className="gif">
            <p>{item.title}</p>
            <img width={120} height={80} src={item.url} alt={`gif de ${item}`} key={item.id} />
          </div>
        )
      })
    }
    </div>
    </>
  )
}

export default App
