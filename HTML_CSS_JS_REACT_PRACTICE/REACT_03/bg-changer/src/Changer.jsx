export function Changer({ setColor }) {

    return (
        <>
            <div className="flex flex-wrap justify-center fixed w-screen h-[8vh] bottom-[5vh]">
                <div className="w-[70vw] h-[8vh] flex justify-center items-center gap-5 rounded-xl bg-cyan-300">
                    <div className="outline-none bg-slate-400 rounded-xl p-1"><button onClick={() => setColor('white')}>white</button></div>
                    <div className="outline-none bg-red-700 rounded-xl p-1"><button onClick={() => setColor('red')}>red</button></div>
                    <div className="outline-none bg-blue-500 rounded-xl p-1"><button onClick={() => setColor('blue')}>blue</button></div>
                    <div className="outline-none bg-green-400  rounded-xl p-1"> <button onClick={() => setColor('green')}>green</button></div>
                    <div className="outline-none bg-yellow-400 rounded-xl p-1"><button onClick={() => setColor('yellow')}>yellow</button></div>
                    <div className="outline-none bg-pink-500 rounded-xl p-1"><button onClick={() => setColor('pink')}>pink</button></div></div>
            </div>
        </>
    )
}