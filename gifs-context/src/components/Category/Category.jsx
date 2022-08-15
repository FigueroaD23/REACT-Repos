import React from 'react'
import {Link} from "react-router-dom"
import "../Category/Category.css"

const Category = ({name = "Más populares", options =[]}) => {
  return (
      <section>
        <h3>{name}</h3>
        {
            options.map((singleOption,index)=>{
                return(
                    <>
                    <Link to={`/search/${singleOption}`} className={`category`}>
                        <h2>{singleOption}</h2>
                    </Link> 
                    </>
                )
            })
        }
    </section>
  )
}

export default Category 