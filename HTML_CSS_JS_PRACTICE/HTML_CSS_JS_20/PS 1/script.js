function loadScript(src,callBack){
    // console.log(src);
    console.log("Let's see when this works");
    let myPromise;
    myPromise = new Promise(function(myResolve,myReject){
    let script = document.createElement("script");
    script.src = src;
    console.log(myPromise);//This gives undefined because assignment occurs after Promise constructor execution
    // console.log(script.src,"Error!");
    script.onload = (e)=>{
        console.log(myPromise);
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
    return myPromise;
}
function checkPromise(error,script){
    console.log("Hello from checkPromise function");
    if(error){
        console.log(error.type,":",error.message);
        console.log(script.src," can't be fetched!");
        return;
    }
    console.log(script.tagName.toUpperCase+" Executed Successfully");
}
let loaded = loadScript("script2.js",checkPromise);
loaded.then((value)=>{console.log(value)})
loaded.catch((error)=>{
    console.log(error.name);
})
console.log("caller sees:",loaded);