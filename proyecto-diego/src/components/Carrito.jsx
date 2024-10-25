import { useContext } from 'react'
import { CartContext } from '../Context/CartContext'
import "./Carrito.css"
import { Link } from 'react-router-dom'


export default function Carrito () {

    const {carrito,PrecioFinal,VaciarCarrito} = useContext(CartContext)

  return (
   <div>
        
        <h1>Tú carrito de compras</h1>
        {
            carrito.map((prod) =>(
            <div className='containerCarrito'  key={prod.id}>
                <img className='imgCarrito' src={prod.imagen} alt={prod.nombre} />
                <p><b>{prod.nombre}</b></p>
                <p><b>Precio Unitario: $ </b>{prod.precio}</p>
                <p><b>Unidades:  </b>{prod.cantidad}</p>
                <p>Precio total: $ <b></b>{prod.precio * prod.cantidad}</p>

            </div>
            ))
        }

        {
           carrito.length > 0?
               <div className='carrito'>
                 <h3>Precio Final: ${PrecioFinal()}</h3>
                 <button className='btnCompra' onClick={VaciarCarrito}>Vaciar carrito</button>
                 <button className='btnCompra'><Link className='linkBtn' to={"/ChequeOut"}>Finalizar Compra</Link> </button>
                </div>:
                <h2>Esta sin Vinitos 😒</h2>
            
        }
            
         
    </div>
  )
}


