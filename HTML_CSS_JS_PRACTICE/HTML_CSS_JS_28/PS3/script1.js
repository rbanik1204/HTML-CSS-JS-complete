function loadAPI(src, callbackFn){
    let xhttp = new XMLHttpRequest();
    xhttp.open('GET',src,true);
    xhttp.onload = ()=>{
        console.log("XMLHttpRequest readyState value:",xhttp.readyState);
        // console.log(xhttp.getResponseHeader('content-type'));
        if(xhttp.status === 200){
            console.log(xhttp.responseText);
        }
        else{
            console.log("Request failed with status code:",xhttp.status);
        }
        xhttp.json();
    }
    xhttp.onerror = (error)=>{
        console.log("http response not received status code:",xhttp.status);
        console.log(error.messsage)
    }
    try{
    xhttp.send();
    }
    catch(err){
        console.log(err.message)
    }
}
const message = (src,value)=>{

}
loadAPI("https://goweather.xyz/weather/Ny",message);