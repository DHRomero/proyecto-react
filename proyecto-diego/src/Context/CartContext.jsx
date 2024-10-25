import {createContext, useState } from "react";


export const CartContext = createContext();

export const CartProvider = ({children}) =>{
    
  const [carrito, setCarrito] = useState([]);

  const addItemButton=(product,cantidad) => {
  const agregarCarrito= {...product, cantidad};

  const nuevoCarrito = [...carrito];
  const agregadoEnCarrito = nuevoCarrito.find((producto) => producto.id === agregarCarrito.id);

  if(agregadoEnCarrito){
    agregadoEnCarrito.cantidad += cantidad;
  }else{
    nuevoCarrito.push (agregarCarrito);
  }
  setCarrito(nuevoCarrito);
  
}

const cantidadEnCarrito = () =>{
  return carrito.reduce ((acc, prod) => acc + prod.cantidad,0);
}

const PrecioFinal = () =>{
  return carrito.reduce ((acc, prod) => acc + prod.precio * prod.cantidad,0);
}

const VaciarCarrito = () =>{
  
  setCarrito([])
}

  return(

    <CartContext.Provider value={{carrito,addItemButton,cantidadEnCarrito,PrecioFinal,VaciarCarrito}}>
      {children}
    </CartContext.Provider>
    
  )
}
