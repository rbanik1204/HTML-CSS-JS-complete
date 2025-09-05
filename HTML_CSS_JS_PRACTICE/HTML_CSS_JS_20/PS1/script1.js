let mypromise = new Promise((resolve,reject)=>{
    let script = document.createElement("script");
    script.src = "script2.js";
    console.log(mypromise);
    script.onload = ()=>{
        console.log("Loaded script is:"+src);
        resolve(true);
        console.log(mypromise);
    }
    script.onerror = ()=>{
        console.log(src+" faced issue during loading!");
        reject(new Error("Faced error during Loading of "+src));
    }
})
mypromise.then((value)=>{
    console.log(value);
},(error)=>{
    console.log(error.name,":",error.message);
});