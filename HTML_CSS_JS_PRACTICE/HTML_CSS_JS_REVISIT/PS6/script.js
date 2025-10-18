const fetchData = async(src)=>{
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        console.log('Current Ready State:'+this.readyState);
    }
    xhr.open('GET',src,true);
    xhr.onload = ()=>{
        return xhr.response;
    }
    xhr.send();
}
async function main(){
    const data = await fetchData(src);
    console.log(data);
}
main('https://goweather.xyz/weather/Ny');