import { useState } from "react"
import { Card } from "./Card.jsx"
function App() {
  let [counter, setCounter] = useState(10)
  const add = () => {
    counter++
    setCounter(counter)
    console.log(`Updated Value:${counter}`)
  }
  const varName="I am test HEAD property"
  const testArr = [1, 2, 3]
  return (
    <>
      <h1 className="font-bold">Hello from React</h1>
      <p>Click the button to append me : {counter}</p>
      <button onClick={add}>Click me!</button>
       <div className="w-[40vw] h-[40vh] bg-cyan-400">
          <Card myName={varName} myArr={testArr} />
          <p> Below i have test props</p>
       </div>
    </>
  )
}

export default App
