
const Producto = ({nombre, precio,color,imgsrc}) => {
  return (
    <div className="producto">
        <h2>{nombre}</h2>
        <img src={imgsrc} alt="" />
        <hr style={{background:color,width:'100%'}}/>
        <p>${precio} MXN</p>
        <button>Add to cart</button>
    </div>
  )
}

export default Producto