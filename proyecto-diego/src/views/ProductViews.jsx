import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getProduct } from "../asyncMock"
import "./ProductViews.css"



export default function ProductViews(){

    const[product, setProduct]= useState({})

    const {id}= useParams();

    useEffect(()=>{
        setProduct(getProduct(id))
    },[]);

    return(
        <>
        <section className="containerCard">
        <article className="cardProduct">
            <h2 className="title">{product.nombre}</h2>
            <img className="imgCard" src= {product.imagen} alt= {product.nombre} />
            <p>Cepa: {product.description} </p>
            <p>Bodega: {product.Bodega}</p>
            <p>Precio: $ {product.Precio}</p>
            <button className="carritoBtn">Agregar al Carrito</button>
        </article>
        </section>
        </>
    )
}