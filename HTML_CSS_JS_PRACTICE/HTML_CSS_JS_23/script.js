// let myPromise = async ()=>{
//     return 7;
// }
// myPromise().then((value)=>alert(value));
let weather = async ()=>  {
    let bengalWeather = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("27 Degrees");
        },1000)
    })
    
    let delhiWeather = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("31 Degrees");
        },4000)
    })
    // bengalWeather.then(alert),delhiWeather.then(alert); 
    // Okay await waits for the settlement of the promise and then takes the resolved value 
    let bengalW = await bengalWeather;
    let delhiW =  await delhiWeather;
    return [bengalW,delhiW]; 
}
let cherry = async ()=>{
    console.log("This will be executed after weather function")
}
async function main(){
console.log("Welcome to weather house");
let w = await weather(); // weather() returns the Promise but await fetches the the resolved value
let c = await cherry();

w.forEach((element,index)=>{
    if (index == 0)
        console.log("Fetching Bengal Weather status:"+ element);
    else
        console.log("Fetching Delhi Weather:"+ element);
})
}
main()