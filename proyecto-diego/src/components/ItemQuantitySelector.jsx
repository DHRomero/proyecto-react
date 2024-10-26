import { useContext, useState } from 'react';
import "./ItemQuantitySelector.css"
import { CartContext } from '../Context/CartContext';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

export default function ItemQuantitySelector({product}) {
  

  const{carrito,addItemButton}= useContext(CartContext);
  console.log(carrito);

    const [cantidad, setCantidad] = useState(1);
  
    const handleSuma = () => {
      cantidad < product.stock && setCantidad(cantidad +1)
    }
  
    const handleResta = () => {
      cantidad >1 && setCantidad(cantidad-1);
      }

      const handleAgregar = () => {
        addItemButton(product, cantidad);

        toast.success(`${product.nombre} agregado al carrito. Cantidad: ${cantidad}`, {
          position: "top-right",  
          autoClose: 3000,        
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    return (
      <>
      <div>
        <h3 className='title-second'>Unidades disponibles = {product.stock}</h3>
        <p>{cantidad}</p>
        <button className='contador' onClick={handleSuma}>+</button>
        <button className='contador'onClick={handleResta}>-</button>
        <button className='btnAgregar' onClick={handleAgregar}>Agregar al carrito</button>
      </div>
      <ToastContainer />
      </>
    );
  }