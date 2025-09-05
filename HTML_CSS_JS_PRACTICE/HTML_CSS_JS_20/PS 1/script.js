function loadScript(src,callBack){
    console.log("Let's see when this works\n");
    return myPromise = new Promise(function(myResolve){
    let script = document.createElement("script");
    script.src = src;
    console.log(myPromise);
    script.onload = (e)=>{
        console.log(src," has Successfully loaded");
        myResolve(true);
        console.log(myPromise);
        callBack(null,script);
    }
    script.onerror = (e)=>{
        // console.log(myPromise);
        myReject(new Error("Faced Some error during Execution"),script);
    }
});
}
function checkPromise(error,script){
    console.log("Hello from checkPromise function");
    if(error){
        console.log(error.type,":",error.message);
        console.log(script.src," can't be fetched!");
        return;
    }
    alert(myPromise," Executed Successfully");
}
let loaded = loadScript("script2.js",checkPromise);
console.log("caller sees:",loaded.script.src);