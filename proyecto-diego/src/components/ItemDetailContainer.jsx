import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import "./ItemDetailContainer.css"
import {doc, getDoc} from "firebase/firestore"
import {db} from "./firebase/firebase"
import ItemQuantitySelector from "./ItemQuantitySelector"
import Loader from "./Loader"


export default function ItemDetailContainer(){

    const[product, setProduct]= useState({})
    const [loading, setLoading] = useState(true);

    const {id}= useParams();

    useEffect(()=>{
        const docRef = doc(db, "items", id);
        getDoc (docRef)
        .then((resp)=>{
            setProduct(
                {...resp.data(), id: resp.id}
            );
        })
        .catch((error) => {
            console.error("Error al cargar el producto: ", error);
        })
        .finally(() => {
            setLoading(false);  
        });
    
    },[]);

    return(
        <>
        <section className="containerCard">
        {loading? (<Loader/>) :(
        <article className="cardProduct">
            <h2 className="title">{product.nombre}</h2>
            <img className="imgCard" src= {product.imagen} alt= {product.nombre} />
            <p><b>Cepa:</b> {product.description} </p>
            <p><b>Bodega: </b>{product.bodega}</p>
            <p><b>Precio: $ </b>{product.precio}</p>
           
            <ItemQuantitySelector product={product}/>    
            
        </article>
        )}
        </section>
        </>
    )
}