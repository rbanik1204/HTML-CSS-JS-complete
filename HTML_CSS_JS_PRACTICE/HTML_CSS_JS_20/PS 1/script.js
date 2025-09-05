function loadScript(src,myPromise = new Promise(function(myResolve){
    let script = document.createElement("script");
    script.src = src;
    console.log(myPromise);
    script.onload = (e)=>{
        alert(src," has Successfully loaded");
        myResolve(true);
        console.log(myPromise);
        callBack(null,script);
    }
    script.onerror = (e)=>{
        console.log(myPromise);
        callBack(new Error("Faced Some error during Execution (target:",e.target,")"),script);
    }
}),callBack){
    console.log("Let's see when this works");
}
function checkPromise(error,script){
    console.log("Hello from checkPromise function");
    if(error){
        console(error.type,":",error.message);
        console.log(script.src," can't be fetched!");
        return;
    }
    alert(myPromise," Executed Successfully");
}
let loaded = loadScript("script2.js",mypromise,checkPromise);
console.log("caller sees:",loaded);