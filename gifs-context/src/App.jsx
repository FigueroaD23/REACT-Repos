import { useState } from "react"
import ListOfGifs from "./components/ListOfGifs";

function App() {    
  const [keyword, setKeyWord] = useState('goku'); 
  return (
    <>           
    <button onClick={()=>{setKeyWord("spongebob");console.log("hola")}}>incrementar</button>     
      <div className="container">
        <ListOfGifs keyword={keyword}/>        
      </div>
    </>
  )
}

export default App
