import './App.css'
import NavBar from './components/Navbar'
import { BrowserRouter, Routes ,Route } from 'react-router-dom'
import ProductViews from './views/ProductViews'
import ItemListContainer from './components/ItemListContainer'



function App() {
 
  return (
    <>
    <BrowserRouter>
    <NavBar/> 
    
    <Routes>
      <Route exact path ="/" element ={<ItemListContainer/>}/>
      <Route exact path ="/category/:categoryId" element ={<ItemListContainer/>}/>
      <Route exact path ="/product/:id" element ={<ProductViews/>}/>
    </Routes>
    </BrowserRouter>
   
      
      
    </>
  )
}

export default App

