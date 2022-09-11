import { useContext } from "react";
import CarritoContext from "../Context/CarritoContex";
const Producto = ({id,nombre, precio,color,imgsrc,cantidad}) => {
  const {carritoBD,setCarritoBD} = useContext(CarritoContext)
  const {database,setDatabase} = useContext(CarritoContext)    
  
  const handleClick = ()=>{
    const productoStock = database.find((item)=>item.id === id)
    console.log(productoStock)
    const producto = {
      id,nombre,precio,color,imgsrc,cantidad:1
    };
    //console.log(producto)    
    
    if(!carritoBD.hasOwnProperty(producto.id)){   
      console.log("primera vez")         
      const carrito = {...carritoBD}
      carrito[producto.id] = {...producto}
      console.log("carrito",carrito)      
      setCarritoBD(carrito)
      return
    }
    if(carritoBD.hasOwnProperty(producto.id) && carritoBD[producto.id].cantidad < productoStock.cantidad){
      console.log("segunda vez")
      const carrito = {...carritoBD}  
      producto.cantidad = carrito[producto.id].cantidad + 1;
      carrito[producto.id] = {...producto}
      console.log(carrito)
      setCarritoBD(carrito)
      return
    }        
    alert("no hay más stock")
    


  }

  return (
    <div className="producto">
        <h2>{nombre}</h2>
        <img src={imgsrc} alt="" />
        <hr style={{background:color,width:'100%'}}/>
        <p>${precio} MXN</p>
        <p>Cantidad: {cantidad}</p>
        <button onClick={handleClick}>Add to cart</button>
    </div>
  )
}

export default Producto