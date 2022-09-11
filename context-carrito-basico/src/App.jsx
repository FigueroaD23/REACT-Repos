import ProductoLista from "./components/ProductosLista";
import Carrito from "./components/Carrito";
import './App.css'
import { CartProvider } from "./Context/CarritoContex";

function App() {

  return (
    <CartProvider>
      <div className="container-main">
        <div className="container-producto">
          <Carrito />
          <ProductoLista />
        </div>
      </div>
    </CartProvider>
  )
}

export default App
