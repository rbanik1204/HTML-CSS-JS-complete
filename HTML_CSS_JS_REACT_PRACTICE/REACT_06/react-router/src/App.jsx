import { Routes, Route } from "react-router";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Products from "./Products";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/:id" element={<Home />} />
        <Route path="/products/:productID" element={<Products />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
