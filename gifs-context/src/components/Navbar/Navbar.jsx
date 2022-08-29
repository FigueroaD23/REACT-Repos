import {    
    NavLink
  } from "react-router-dom";
import "./Navbar.css"
export const Navbar = () => {
  const categoriasGif = ["Goku","Stitch","Fall guys"]
  const handleClickNav = ()=>{
    window.scrollTo(0, 0)
  }
  return (    
    <div className="nav-container">
      <nav>
        <NavLink to='/' exact activeClassName="nav-active" onClick={handleClickNav}>HOME</NavLink>   
        <div>
          {
            categoriasGif.map((categoria)=>{
              return(
                <NavLink to={`/search/${categoria}`} onClick={handleClickNav} activeClassName="nav-active" key={categoria}>{categoria}</NavLink>   
                )
              })
          }
      </div>
      </nav>
    </div>
  )
}