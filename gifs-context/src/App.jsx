
import ListOfGifs from "./components/ListOfGifs";
import {Navbar} from "./components/Navbar";
import { GifEspecifico } from "./components/GifEspecifico";
import Home from "./pages/Home";

import {
  BrowserRouter as Router,
  Switch,
  Route,  
} from "react-router-dom";
{/* <button onClick={()=>{setKeyWord("spongebob");console.log("hola")}}>incrementar</button>      */}

function App() {    
  return (
    <Router>
      <Navbar/>        
      <div className="container">
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/search/:keyword" component={ListOfGifs}/>
          <Route path="/gif/:id" component={GifEspecifico}/>
        </Switch>
      </div>    
    </Router>         
  )
}

export default App
