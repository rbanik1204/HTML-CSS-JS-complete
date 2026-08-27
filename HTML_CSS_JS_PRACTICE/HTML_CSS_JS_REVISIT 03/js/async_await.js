// async function test(){
//     const timerID = await setTimeout(()=>{
//         console.log("I'm from setTimeout!")
//     },3000)
//     return timerID
// }
// test().then((val)=>console.log(val))
// console.log("I will be executed after zero seconds!")

async function weather() {
    console.time("start")
    let delhiWeather = new Promise((res,rej)=>{
        setTimeout(()=>{
            res("27 deg")
        },3000);
    })
    const delhiW = await delhiWeather
    let kolkataWeather = new Promise((res,rej)=>{
        setTimeout(()=>{
            res("29 deg")
        },3000)
    })
    const kolkataW = await kolkataWeather
    console.timeEnd("start")
    return [delhiW, kolkataW]
}
weather().then((res)=>res.forEach((elem)=>console.log(elem)))
console.log("out of weather function!")