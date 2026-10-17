import { Routes, Route } from "react-router"
import Navbar from "./Navbar"
import Home from "./Home"
import About from "./About"
import Products from "./Products"
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/products" element={<Products />}>
          <Route path=":productID" elements={<Products />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />}>
          <Route path=":id" element={<Home />}></Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
