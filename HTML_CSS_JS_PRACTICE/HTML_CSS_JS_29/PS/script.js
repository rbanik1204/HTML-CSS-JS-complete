const weather = async (url)=>{
    await fetch(url,{
        method:'GET'
    })
    .then(res=>res.json())
    .then((data)=>{
        return data;
    })
}
async function main(){
    let url = 'https://goweather.xyz/weather/';
    let URL =  url+prompt("Enter City");
    return weather(URL);
}
let Weather = main()
document.getElementsByClassName("container").innerHTML = ""
//{temperature: '16 °C', wind: '14 km/h', description: 'Sunny', forecast: Array(3)}