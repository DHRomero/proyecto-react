import { useContext } from "react";
import { CartContext } from "../Context/CartContext";


export default function AddItemButton (){

    const{agregarAlCarrito}= useContext(CartContext);
 
    return(
        <>
        <button onClick={agregarAlCarrito}>Agregar al carrito</button>
        </>
    )
}