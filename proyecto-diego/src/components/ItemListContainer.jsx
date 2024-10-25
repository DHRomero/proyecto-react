import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"
import {collection, getDocs, query, where} from "firebase/firestore"
import {db} from "./firebase/firebase"
import Loader from "./Loader"



export default function ItemListContainer(){

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const{categoryId}= useParams()

    useEffect(()=>{
        const productosRef = collection (db, "items");
        const q = categoryId? query (productosRef,where("categoryId", "==", categoryId)) : productosRef;

        setLoading(true);

        getDocs (q)
        .then((resp)=>{
            setProducts(
                resp.docs.map((doc)=>{
                    return {...doc.data(), id: doc.id}
                })
            )
        })
        .catch((error) => {
            console.error("Error al cargar los productos: ", error);
        })
        .finally(() => {
            setLoading(false);  
        });
    },[categoryId]);

    return(
       
        <>
        <section className="container">
            {loading? (<Loader/>):(products.map((product)=>(
            <ItemDetail key={product.id} product={product}/>
            ))
        )}
        </section>
        
        </>
    )
}