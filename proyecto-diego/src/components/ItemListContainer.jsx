import { useEffect, useState } from "react"
import "./ItemListContainer.css"
import "./ItemDetailContainer.css"
import { getCategory, getProducts } from "../asyncMock"
import ItemDetailContainer from "./ItemDetailContainer"
import { useParams } from "react-router-dom"



export default function ItemListContainer(){

    const [products, setProducts] = useState([]);
    const{categoryId}= useParams()

    useEffect(()=>{
        if(categoryId){
            const filteredProducts = getCategory(categoryId);
            setProducts(filteredProducts);
        }else{
            getProducts.then((data)=> setProducts(data));
        }
    },[categoryId]);

    return(
        //<h1 className="tituloColor">{greeting}</h1>
        <>
        <section className="container">
            {products.map((product)=>(
            <ItemDetailContainer key={product.id} product={product}/>
            ))}
        </section>
        
        </>
    )
}