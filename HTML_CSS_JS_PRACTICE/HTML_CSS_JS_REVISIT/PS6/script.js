const fetchData = async(src)=>{
    return new Promise((resolve,reject)=>{
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        console.log('Current Ready State:'+this.readyState);
    }
    xhr.open('GET',src,true);
    xhr.onload = ()=>{
        console.log('HTTP response state:'+xhr.statusText);
        resolve(xhr.response);
        if(xhr.status != 200)
            reject(new Error("Bad Gateway!"));
    }
    xhr.send();
})};
async function main(src){
    const data = await fetchData(src);
    console.log(data);
}
main('https://goweather.xyz/weather/Ny');