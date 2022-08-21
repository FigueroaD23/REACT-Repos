import Gif from "../Gif/Gif"
import "../ListOfGifs/ListOfGifs.css"
const ListOfGifs = ({gifs}) => {
  return (
    <>
      <div className='ListOfGifs'>
      {
          gifs.map(({url,id,title})=>{
              return(<Gif url={url} id={id} title={title} key={id} />)
          })
      }
      </div>
      <div>escuchador</div>
    </>
  )
}

export default ListOfGifs       