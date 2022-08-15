import { useContext} from 'react';
import { useParams } from 'react-router-dom'
import GifContextdefault from "../../context/GifContext";
import Gif from "../Gif/Gif";

export const GifEspecifico = () => {
  const {gifs} = useContext(GifContextdefault)
  console.log(gifs)
    const {id} = useParams()
    const gifEspecifico = gifs.find((singleGif)=> singleGif.id === id)
    //const [loading, setLoading] = useState(false);
    //const [gif,setGif] = useState([])
    /* useEffect(() => {
      setLoading(true)
      getGifEspecifico({id}).then((gifAPI)=>{
        setGif(gifAPI)   
        setLoading(false)
      })
    }, [id]) */
    

  return (
    <>   
      <Gif {...gifEspecifico}/>
    </>
  )
}
