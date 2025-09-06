function loadScript(src,callBack){
    // console.log(src);
    console.log("Let's see when this works\n");
    return myPromise = new Promise(function(myResolve,myReject){
        // console.log("Buggified")
    let script = document.createElement("script");
    script.src = src;
    // console.log(script.src,"Error!");
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
    document.head.appendChild(script);
});
}
function checkPromise(error,script){
    console.log("Hello from checkPromise function");
    if(error){
        console.log(error.type,":",error.message);
        console.log(script.src," can't be fetched!");
        return;
    }
    console.log(script+" Executed Successfully");
}
let loaded = loadScript("script2.js",checkPromise);
loaded.catch((error)=>{
    console.log(error.name);
})
console.log("caller sees:",loaded);