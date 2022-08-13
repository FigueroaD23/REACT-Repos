import React from 'react'
import "./Skeleton.css"
const Skeleton = () => {
  const arraySk = [0]
  return (
    <>
    {
      arraySk.map(()=>{
        return(
          <div>
              <div className="gif2 sinhover">                        
                  CARGANDO
              </div> 
          </div>
        )
      })
    }
    </>
  )
}

export default Skeleton