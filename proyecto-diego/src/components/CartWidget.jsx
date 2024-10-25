import { useContext } from 'react';
import { Link } from 'react-router-dom'
import { CartContext } from '../Context/CartContext';
import "./CartWidget.css"

export default function CartWidget() {

  const{cantidadEnCarrito}= useContext(CartContext);

    return (
      <>
      <button className='btnCarrito'>
        <Link className='link' to="/cart">
        🛒 ({cantidadEnCarrito()})
        </Link>
      </button>
    
      </>
    )
  }
  