const weather = async (url)=>{
    await fetch(url,{
        method:'GET'
    })
    .then(res=>res.json())
    .then(data=>console.log(data))
}
async function main(){
    let Url = 'https://goweather.xyz/weather/Berlin';
    // let URL =  url+prompt("Enter City");
    return weather(Url);
}
let Weather = main();
let elem = document.querySelector('button');
// console.log(elem.innerText);
// elem.addEventListener('click',()=>{
//     elem.innerHTML = Weather.temperature;
// })
//{temperature: '16 °C', wind: '14 km/h', description: 'Sunny', forecast: Array(3)}