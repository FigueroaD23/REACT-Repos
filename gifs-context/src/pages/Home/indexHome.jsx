import { useState } from "react";
import { useHistory } from "react-router-dom";
import Spinner from "../../components/Spinner/Spinner";

const Home = () => {
  const [searchKey, setSearchKey] = useState("")
  const history = useHistory()
  console.log(history)

  const handleInputChange = (e)=>{
    setSearchKey(e.target.value)
  }
  
  const handleSubmit = (e)=>{
    history.push(/search/+searchKey)
    e.preventDefault();
  }
  return (  
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={handleInputChange} type="text" name="keysearch" id="keysearch" placeholder="Buscar gif"/>
      </form>
      {searchKey}
    </div>        
  )
}

export default Home