import { useState } from 'react'
import generator from 'generate-password-ts'
function App() {
  const [length, setLength] = useState(1);
  const [numbersAllowed, setNumbersAllowed] = useState(false);
  const [symbolsAllowed, setSymbolsAllowed] = useState(false);
  const [password, setPassword] = useState('')
  function generatePassword(){
    const newPassword = generator.generate({
      length:length,
      numbers:numbersAllowed,
      symbols:symbolsAllowed,
      
    })
    console.log(length)
    setPassword(newPassword)
  }
  function handleChange(event){
    setLength(event.target.value);
    generatePassword()
  }
  return (
    <div className='w-screen min-h-screen bg-black flex flex-start items-center flex-col gap-7'>
      <h1 className='font-[800] text-center text-[32px] text-white'>Password Generator</h1>
      <div className="w-[60vw] h-[30vh] bg-green-300 font-mono flex justify-center items-center flex-col gap-4 rounded-3xl">
        <div>
          <input type="text" placeholder={password} />
          <button className='bg-white text-black border-[2px] border-black border-y-0'>copy</button>
        </div>
        <div >
          <input type="range" min="1" max="100" value={length} onChange={handleChange}/><span>&nbsp;Length({length})&nbsp;</span>
          <input type="checkbox" name="numbers" id="numbers" /><span>&nbsp;numbers&nbsp;</span>
          <input type="checkbox" name="characters" id="characters" /><span>&nbsp;characters&nbsp;</span>
        </div>
      </div>
    </div>
  )
}

export default App
