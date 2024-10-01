
import CartWidget from "./CartWidget"
import "./NavBar.css"
import { Link } from 'react-router-dom'


export default function NavBar (product){

    return (
        <>
        <nav className="nav">

            <Link className="link" to= {"/"}>
            <img className="logo" src="imagenes/logo2.png" alt="logo" />
            </Link>
                        
            <div>
            <button className="btnav" ><Link className="link" to= {"/category/Vinos-Tintos"}>Vinos Tintos</Link></button>
            <button className="btnav" ><Link className="link" to= {"/category/Vinos-Blancos"}>Vinos Blancos</Link></button>
            <button className="btnav" ><Link className="link" to= {"/category/Vinos-Rosados"}>Vinos Rosados</Link></button>
            </div>
            <div>
            <CartWidget/>
            </div>
            
        </nav>
        </>
     
    )
}