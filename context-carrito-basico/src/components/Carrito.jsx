import React from 'react'
import { useContext } from 'react';
import CarritoContext from "../Context/CarritoContex";
const Carrito = () => {
    const {carritoBD} = useContext(CarritoContext)
    const totalPrice = Object.values(carritoBD).reduce((acc,curr)=>acc+curr.precio*curr.cantidad,0)
  return (
    <div>
        <span>items in cart: {Object.values(carritoBD).length}</span>
        <br />
        <span>total price: {totalPrice.toFixed(2)}</span>
    </div>
  )
}

export default Carrito  