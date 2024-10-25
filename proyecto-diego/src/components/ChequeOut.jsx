import { useContext, useState } from "react"
import { CartContext } from "../Context/CartContext"
import { useForm } from "react-hook-form"
import "./ChequeOut.css"
import { addDoc, collection } from "firebase/firestore"
import { db } from "./firebase/firebase"

export default function ChequeOut (){

    const [pedidoId, setPedidoId] = useState("");

    const {carrito,PrecioFinal,VaciarCarrito} = useContext(CartContext);

    const {register, handleSubmit, formState: { errors }} = useForm();

    const enviar=(data)=>{
        const pedido={
            cliente: data,
            pedido: carrito,
            total: PrecioFinal(),
            
        }
        console.log(pedido);

        const pedidosRef = collection(db, "orders");

        addDoc(pedidosRef, pedido)
            .then((doc) => {
                setPedidoId(doc.id);
                VaciarCarrito();
            })
    }
    if (pedidoId) {
        return (
            <div>
                <h1 className="main-title">Muchas gracias por tu compra </h1>
                <p>Tu número de orden es: {pedidoId}</p>
            </div>
        )
    }

   

    return(
        <div className="containerCheque">
        <h1>Finaliza tu Compra</h1>
        <form className="formulario" onSubmit={handleSubmit(enviar)}>

            <div>
                <input type="text" placeholder="Ingrese su nombre completo" {...register("nombre",{ required: "El nombre es obligatorio" })} />
                {errors.nombre && <p className="errorForm">{errors.nombre.message}</p>}
            </div>
            <div>
            <input type="email" placeholder="Ingrese su correo" {...register("email",{ required: "El correo es obligatorio" })} />
            {errors.email && <p className="errorForm">{errors.email.message}</p>}
            </div>
            <div>
            <input type="phone" placeholder="Ingrese su telefono"  {...register("telefono",{ required: "El telefono es obligatorio" })}/>
            {errors.telefono && <p className="errorForm">{errors.telefono.message}</p>}
            </div>
            <div>
            <input type="text" placeholder="Ingrese su dirección"  {...register("dirección",{ required: "La dirección es obligatoria" })}/>
            {errors.dirección && <p className="errorForm">{errors.dirección.message}</p>}
            </div>

        <button className="btnCheque" type="submit">Comprar</button>
        </form>
        </div>
    )
}