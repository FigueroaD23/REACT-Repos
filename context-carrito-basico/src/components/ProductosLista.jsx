import Producto from "./Producto";
const ProductosLista = () => {
    const database = [{id:1,nombre:"Make up producto", precio:10.68,categoria:"Ropa hombre",descripcion:"Playera Nike", talla:"G",color:"red",img:"https://image.shutterstock.com/image-photo/set-makeup-eyes-faces-women-600w-1933547759.jpg"},
    {id:2,nombre:"Make up producto", precio:20.80,categoria:"Ropa hombre",descripcion:"Playera Nike Air Jordan", talla:"G",color:"orange",img:"https://image.shutterstock.com/shutterstock/photos/1048616987/display_1500/stock-photo-cosmetics-set-on-wooden-background-various-cosmetics-products-on-white-wooden-background-copy-1048616987.jpg"},
    {id:3,nombre:"Make up producto", precio:3.80,categoria:"Ropa Muje",descripcion:"Playera Nike Dri fit", talla:"CH",color:"lightgray",img:"https://image.shutterstock.com/image-photo/word-beauty-cosmetic-flowers-on-600w-714521215.jpg"},
    {id:4,nombre:"Make up producto", precio:131.60,categoria:"Ropa niño",descripcion:"Playera Dry out", talla:"S",color:"yellow",img:"https://image.shutterstock.com/image-photo/different-makeup-cosmetics-on-white-600w-572508496.jpg"},
    {id:55,nombre:"Make up producto", precio:134.33,categoria:"Ropa niño",descripcion:"Playera Nike Tee", talla:"XG",color:"lightblue",img:"https://image.shutterstock.com/image-photo/flat-lay-composition-products-decorative-600w-1163235394.jpg"}]
  return (    
    <>
      {
        database.map((producto)=><Producto key={producto.id} nombre={producto.nombre} precio={producto.precio} color={producto.color} imgsrc={producto.img}/>)
      }
    </>
    
  )
}

export default ProductosLista