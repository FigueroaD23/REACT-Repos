import React from 'react'
import "./Spinner.css"
const Spinner = () => {  
  return (    
    <div style={{height:'200vh'}}>
      <div className="lds-ripple">
        <div>
        </div>

        <div>
        </div>

        <h3>CARGANDO</h3>

      </div>      
    </div>    
  )
}

export default Spinner