import { Routes, Route } from "react-router"
import Navbar from "./Navbar"
import Home from "./Home"
import About from "./About"
import Products from "./Products"
import { HomeChild } from "./HomeChild"
import { ProductChild } from "./ProductChild"
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/products" element={<Products />}>
          <Route path=":productID" element={<ProductChild />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />}>
          <Route path=":id" element={<HomeChild />}></Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
