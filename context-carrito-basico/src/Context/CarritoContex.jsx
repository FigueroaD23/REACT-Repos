import { useContext } from "react";
import { createContext } from "react";
import { useState } from "react";

const CartContext = createContext()

export function CartProvider ({children}){
    const [carritoBD, setCarritoBD] = useState({})
    const [database, setDatabase] = useState([])  
    return(
        <CartContext.Provider value={{carritoBD,setCarritoBD,database,setDatabase}}>
            {children}
        </CartContext.Provider>
    )

}

export default CartContext