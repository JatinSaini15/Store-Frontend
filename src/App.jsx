import './App.css'
import FooterComponent from './components/FooterComponent'
import HeaderComponent from './components/HeaderComponent'
import ListProductComponent from './components/ListProductComponent'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProductComponent from './components/ProductComponent'

function App() {

  return (
    <>
    <BrowserRouter>
      <HeaderComponent/>
        <Routes>
          {/* //http://localhost:3002 */}
          <Route path = '/' element = { <ListProductComponent />}></Route>
          {/* //http://localhost:3002/products */}
          <Route path = '/products' element = { <ListProductComponent />}></Route>
          {/* //http://localhost:3002/add-product */}
          <Route path = '/add-product' element = { <ProductComponent />}></Route>
          {/* //http://localhost:3002/edit-product */}
          <Route path = '/edit-product/:id' element = { <ProductComponent />}></Route>
        </Routes>
      <FooterComponent/>
    </BrowserRouter>
    
    </>
  )
}

export default App
