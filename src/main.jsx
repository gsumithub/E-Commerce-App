import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import MainLayout from './assets/components/common/MainLayout'
import Home from './assets/components/pages/Home'
import About from './assets/components/pages/About'
import Products from './assets/components/pages/Products'
import Cart from './assets/components/pages/Cart'
import ProductDetails from './assets/components/pages/ProductDetails'
import MainContextFile from './assets/components/context/MainContextFile'
import Contact from './assets/components/pages/Contact'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MainContextFile>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route element={<MainLayout/>}>
              <Route path={'/'} element={<Home/>}></Route>
              <Route path={'/about'} element={<About/>}></Route>
              <Route path={'/contact'} element={<Contact/>}></Route>
              <Route path={'/products/:categorySlug?'} element={<Products/>}></Route>
              <Route path={'/product-details/:slug'} element={<ProductDetails/>}></Route>
              <Route path={'/cart'} element={<Cart/>}></Route>
              <Route path={'/'} element={<Home/>}></Route>
            </Route>
          </Route>
        </Routes>
    </BrowserRouter>
    </MainContextFile>
    
  </StrictMode>,
)
