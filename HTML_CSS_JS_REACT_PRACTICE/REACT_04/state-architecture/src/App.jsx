import { useState } from 'react'
import generator from 'generate-password-ts'
function App() {
  const [length, setLength] = useState(1);
  const [numbersAllowed, setNumbersAllowed] = useState(false);
  const [symbolsAllowed, setSymbolsAllowed] = useState(false);
  const [password, setPassword] = useState('a')
  const [copy,setCopied] = useState(false);
  function generatePassword(newLength,isCheckedNums,isCheckedSyms){
    const newPassword = generator.generate({
      length:newLength,
      numbers:isCheckedNums,
      symbols:isCheckedSyms,
      
    })
    setPassword(newPassword)
    setCopied(false)
  }
  function handleChange(event){
    setLength(event.target.value);
    generatePassword(event.target.value,numbersAllowed,symbolsAllowed)
  }
  function handleCheckboxNumbers(event){
    const isCheckedNums = event.target.checked
    setNumbersAllowed(isCheckedNums)
    generatePassword(length,isCheckedNums,symbolsAllowed)
  }
  function handleCheckboxSymbols(event){
    const isCheckedSyms = event.target.checked
    setSymbolsAllowed(isCheckedSyms)
    generatePassword(length,numbersAllowed,isCheckedSyms)
  }
  function copyToClipBoard(event){
    if(!password) return
    setCopied(true);
    navigator.clipboard.writeText(password)
    setTimeout(()=>{
      setCopied(false)
    },2000)
  }
  return (
    <div className='w-screen min-h-screen bg-black flex flex-start items-center flex-col gap-7'>
      <h1 className='font-[800] text-center text-[32px] text-white'>Password Generator</h1>
      <div className="w-[60vw] h-[30vh] bg-green-300 font-mono flex justify-center items-center flex-col gap-4 rounded-3xl">
        <div>
          <input type="text" value={password} />
          <button onClick ={copyToClipBoard} className='bg-white text-black border-[2px] border-black border-y-0'>{copy ? 'copied':'copy'}</button>
        </div>
        <div >
          <input type="range" min="1" max="100" value={length} onChange={handleChange}/><span>&nbsp;Length({length})&nbsp;</span>
          <input type="checkbox" name="numbers" id="numbers" checked={numbersAllowed} onChange={handleCheckboxNumbers} /><span>&nbsp;numbers&nbsp;</span>
          <input type="checkbox" name="symbols" id="symbols" checked={symbolsAllowed}  onChange={handleCheckboxSymbols}/><span>&nbsp;symbols&nbsp;</span>
        </div>
      </div>
    </div>
  )
}

export default App
