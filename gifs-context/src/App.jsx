
import {Navbar} from "./components/Navbar/Navbar";
import GifEspecifico from "./pages/EspecificoPorID/indexEspecificoID";
import Home from "./pages/Home/indexHome";
import Search from "./pages/Search/indexSearch"
import { GifsContextProvider } from "./context/GifContext";
import {
  BrowserRouter as Router,
  Switch,
  Route,  
} from "react-router-dom";
{/* <button onClick={()=>{setKeyWord("spongebob");console.log("hola")}}>incrementar</button>      */}

function App() {    
  return (
    <GifsContextProvider>

    <Router>
      <Navbar/>        
      <div className="container">
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/search/:keyword/:rating?" component={Search}/>
          <Route path="/gif/:id" component={GifEspecifico}/>
        </Switch>
      </div>    
    </Router>  
           
    </GifsContextProvider>
  )
}

export default App
