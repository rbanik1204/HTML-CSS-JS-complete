import { useState } from "react"
function App() {
  let [counter, setCounter] = useState(10)
  const add = () => {
    counter++
    setCounter(counter)
    console.log(`Updated Value:${counter}`)
  }
  return (
    <>
      <h1>Hello from React</h1>
      <p>Click the button to append me : {counter}</p>
      <button onClick={add}>Click me!</button>
    </>
  )
}

export default App
