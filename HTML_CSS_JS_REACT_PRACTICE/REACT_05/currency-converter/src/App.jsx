import { useState } from 'react'
import { InputBox } from './components';
import useCurrencyInfo from './hooks/useCurrencyInfo'
function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(false);
  const BackgroundImage = '../assets/wallpaper.jpg' 
  const currencyInfo = useCurrencyInfo(from);
  let options = Object.entries(currencyInfo[from]) || {};
  const swap = ()=>{
    const swapVar = from;
    setFrom(to);
    setTo(from);
    const swapAmount = amount;
    setAmount(convertedAmount);
    setConvertedAmount(swapAmount);
  }
  const convert = ()=>{
    setConvertedAmount(amount*options)
    console.log(options)
  }
    return (
        <div
            className="w-full h-screen bg-cover bg-center bg-no-repeat flex justify-center items-center"
            style={{
                backgroundImage: `url('${BackgroundImage}')`,
            }}
        >
            <div className="w-[40vw] h-[40vh] ">
                <div className="w-full h-full  border border-gray-60 rounded-lg flex justify-center items-center backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert()
                        }}
                    >
                        <div className="w-full">
                            <InputBox
                                label="From"
                                amount={amount}
                                currencyOptions={options}
                                onCurrencyChange={()=>setAmount(amount)}
                                selectCurrency={from}
                                onAmountChange={(amount)=>{
                                  setAmount(amount)
                                }}
                            />
                        </div>
                        <div className="w-full text-center relative">
                            <button
                                type="button"
                                className=" w-[5vw] h-[5vh] rounded-3xl border-2 bg-blue-500 text-white/90 font-extrabold"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full">
                            <InputBox
                                label="To"
                                convertedAmount={convertedAmount}
                                currencyOptions={options}
                                onCurrencyChange={(currency)=>setTo(currency)}
                                selectCurrency={to}
                            />
                        </div>
                        <button type="submit" className="text-2xl w-[30vw] h-[7vh] mt-5 rounded-3xl bg-blue-500 text-white/90 font-extrabold" onClick={convert}>
                            Convert 
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default App
