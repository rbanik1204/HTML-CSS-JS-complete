import { useState } from "react"
import { Changer } from "./Changer.jsx"
function App() {
  const [backColor, setColor] = useState('white')

  return (
    <div className="w-screen min-h-screen bg-violet-300" style={{backgroundColor:backColor}}>
      <h1 className="p-3 font-extrabold text-center text-2xl">Welcome to Background Changer</h1>
      <Changer setColor={setColor}/>
    </div>
  )
}

export default App
