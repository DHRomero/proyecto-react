import './App.css'
import NavBar from './components/Navbar'
import { BrowserRouter, Routes ,Route } from 'react-router-dom'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import Carrito from './components/Carrito'
import {CartProvider } from './Context/CartContext'
import ChequeOut from './components/ChequeOut'
import Footer from './components/Footer'

function App() {

  return (
    <>

    <CartProvider>
    <BrowserRouter>
    <NavBar/> 
    <Routes>
      <Route exact path ="/" element ={<ItemListContainer/>}/>
      <Route exact path ="/category/:categoryId" element ={<ItemListContainer/>}/>
      <Route exact path ="/product/:id" element ={<ItemDetailContainer/>}/>
      <Route exact path ="/cart" element ={<Carrito/>}/>
      <Route exact path ="/chequeout" element ={<ChequeOut/>}/>
    </Routes>
    
    <><Footer/></>
    </BrowserRouter>

    </CartProvider>  
    </>
  );
}

export default App

