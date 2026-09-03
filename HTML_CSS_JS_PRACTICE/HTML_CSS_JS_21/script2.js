const loadScript = (src)=>{
    let Script = document.createElement("script");
    Script.type= "text/javascript";
    Script.src = src;
    return new Promise((resolve,reject) => {
        Script.onload = ()=>{
            resolve(1);
        };
        Script.onerror = ()=>{
            reject("false");
        };
        document.head.appendChild(Script);
    });
}
loadScript("script3.js").then((value)=>{
    console.log(value);
}).catch((error)=>{
    console.log(error);
})