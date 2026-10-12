import { Link } from "react-router"
function App() {
  return (
    <>
      <Navbar/>
      <Link to='/'element={<Home/>}>Home</Link>
      <Link to='/products'element={<Products/>}>Products</Link>
      <Link to='/about'element={<About/>}>About</Link>
    </>
  )
}

export default App
