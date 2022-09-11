import { useContext } from "react";
import { useEffect, useState } from "react";
import CarritoContext from "../Context/CarritoContex";
import Producto from "./Producto";
const ProductosLista = () => {
  const {database,setDatabase} = useContext(CarritoContext)
  useEffect(() => {
    fetch("../../src/plugins/carrito.json")
      .then(resp => resp.json())
      .then(setDatabase)
      .catch(error => { console.log(error) })
  }, [])

  return (
    <>
      {
        database.map((producto) => {
          return <Producto key={producto.id} id={producto.id} nombre={producto.nombre} precio={producto.precio} color={producto.color} imgsrc={producto.img} cantidad={producto.cantidad} />
        })
      }
    </>

  )
}

export default ProductosLista