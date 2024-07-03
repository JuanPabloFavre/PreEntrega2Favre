
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ItemListContainer from "./pages/itemListContainer/ItemListContainer"
import Cart from "./pages/cart/Cart"
import ItemDetailContainer from "./pages/itemDetailContainer/ItemDetailContainer"
import Layouts from "./components/layouts/Layouts"
import Contact from "./pages/contact/Contact"
import AbautUs from "./pages/abautUs/AbautUs"
import Conditions from "./pages/conditions/Conditions"



function App() {


  return (

    <BrowserRouter>

      <Routes>

        <Route element={<Layouts />}>

          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:name" element={<ItemListContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/ItemDetail/:id" element={<ItemDetailContainer />} />
          <Route path="/Contacto" element={<Contact />} />
          <Route path="/Nosotros" element={<AbautUs />} />
          <Route path="/Condiciones" element={<Conditions />} />

        </Route>

        <Route path="*" element={<h1>error</h1>} />

      </Routes>

    </BrowserRouter>
  )
}

export default App
