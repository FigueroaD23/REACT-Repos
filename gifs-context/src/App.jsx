import { useState } from "react"
import ListOfGifs from "./components/ListOfGifs";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
{/* <button onClick={()=>{setKeyWord("spongebob");console.log("hola")}}>incrementar</button>      */}

function App() {    
  const [keyword, setKeyWord] = useState('goku'); 
  return (
    <Router>
      <div className="container">
        <nav>
          <NavLink to="/gif/barbie">Barbie</NavLink>
          <NavLink to="/gif/Gears of war">Gears of war</NavLink>
          <NavLink to="/gif/"></NavLink>
          <NavLink to="/gif/"></NavLink>
          <NavLink to="/gif/"></NavLink>
        </nav>
        <hr />
        <Switch>
          <Route path="/" exact>HOME</Route>
          <Route path="/gif/:keyword" component={ListOfGifs}/>
        </Switch>
      </div>    
    </Router>         
  )
}

export default App
