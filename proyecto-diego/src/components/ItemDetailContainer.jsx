import { Link } from "react-router-dom"
import "./ItemDetailContainer.css"
import ProductViews from "../views/ProductViews"

export default function ItemDetailContainer({product}){


    return(
        <>
        <section className="container"> 
        <article className="card">
            <h2>{product.nombre}</h2>
            <img className="cardImg" src={product.imagen} alt={product.nombre} />
            <p>Cepa: {product.description}</p>
            <p>Bodega: {product.Bodega}</p>
            <button className="detailBtn"><Link className= "linkBtn "to= {`/product/${product.id}`}>Ver Detalles</Link></button>
        </article>
        </section>
        </>
    )
} 