import {    
    NavLink
  } from "react-router-dom";
import "./Navbar.css"
export const Navbar = () => {
  const categoriasGif = ["Goku","Stitch","Fall guys"]
  return (    
    <div className="nav-container">
      <nav>
        <NavLink to='/' exact activeClassName="nav-active">HOME</NavLink>   
        <div>
          {
            categoriasGif.map((categoria)=>{
              return(
                <NavLink to={`/search/${categoria}`} activeClassName="nav-active" key={categoria}>{categoria}</NavLink>   
                )
              })
          }
      </div>
      </nav>
    </div>
  )
}