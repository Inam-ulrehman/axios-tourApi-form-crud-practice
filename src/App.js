import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { SingleProduct, SharedLayout, Products, Home, Cart } from './pages'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/products/:productID' element={<SingleProduct />} />
          <Route path='/Cart' element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
