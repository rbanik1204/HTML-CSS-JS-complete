import { useState } from "react"
function Changer({ color }) {
    const [backColor, setColor] = useState('white')

    return (
        <>
            <div className="flex justify-center items-cente gap-1 rounded-xl fixed w-screen h-[8vh] bottom-[5vh] bg-cyan-300">
                <div className="w-[80px] h-[5vh]"><button onClick={() => setColor('white')}>white</button></div>
                <div><button onClick={() => setColor('red')}></button></div>
               <div><button onClick={() => setColor('blue')}></button></div>
               <div> <button onClick={() => setColor('green')}></button></div>
                <div><button onClick={() => setColor('yellow')}></button></div>
                <div><button onClick={() => setColor('pink')}></button></div>
            </div>
        </>
    )
}