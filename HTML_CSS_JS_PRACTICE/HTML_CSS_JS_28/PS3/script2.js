
function loadAPI(src,callbackFn){
    fetch(src,{
        method:'GET',
        headers:{
            'content-type':'application/json'
        }
    })
    .then(res=> res.json)
    .then((data)=>{
        console.log(data);
    })
    .catch(error=>console.log(error))
}

const message = (src)=>{

}
loadAPI("https://goweather.xyz/weather/Ny",message)