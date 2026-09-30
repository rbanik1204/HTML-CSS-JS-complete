import { useState } from "react"
import { Changer } from "./Changer.jsx"
function App() {
  const [backColor, setColor] = useState('white')

  return (
    <>
      <p className="font-extrabold text-center ">Welcome to Background Changer</p>
      <Changer />
    </>
  )
}

export default App
