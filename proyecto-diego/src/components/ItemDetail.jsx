import { Link } from "react-router-dom"
import "./ItemDetail.css"

export default function ItemDetail({product}){

    return(
        <>
        <section className="container"> 
        <article className="card">
            <h2>{product.nombre}</h2>
            <img className="cardImg" src={product.imagen} alt={product.nombre} />
            <p><b>Cepa:</b> {product.description}</p>
            <p><b>Bodega:</b> {product.bodega}</p>
            <button className="detailBtn"><Link className= "linkBtn "to= {`/product/${product.id}`}>Ver Detalles</Link></button>
        </article>
        </section>
        </>
    )
} 