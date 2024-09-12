import CartWidget from "./CartWidget"
import "./NavBar.css"

export default function NavBar (){

    return (
        <>
        <nav className="nav">
            <img className="logo" src="imagenes/logo2.png" alt="logo" />
            <div>
            <button className="btnav" >Vinos Destacados</button>
            <button className="btnav" >Vinos Tintos</button>
            <button className="btnav" >Vinos Blancos</button>
            <button className="btnav" >Vinos Rosados</button>
            </div>
            <div>
            <CartWidget/>
            </div>
            
        </nav>
        </>
     
    )
}