import React from 'react'
import {    
    NavLink
  } from "react-router-dom";

export const Navbar = () => {
  const categoriasGif = ["Barbie", "Batman", "Stitch", "GTA", "Fall guys"]
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