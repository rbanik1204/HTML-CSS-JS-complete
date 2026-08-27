const loadScript = (src) => {
    return new Promise((res, rej) => {
        let Script = document.createElement("script")
        Script.type = "text/javascript"
        Script.src = src
        Script.onload = (event)=>{
            res(1)
            console.log("Script has loaded successfully");
        }
        Script.onerror = (event)=>{
            rej(new Error("Script has not loaded!"))
        }
        document.head.appendChild(Script)
    })
}
loadScript("log.js")
.then((resolve)=>{
    console.log(resolve)
    return new Promise((myres,myrej)=>{
        myrej(new Error("new Error!"))
    })
},
(err)=>console.log(err.message))
.catch((err)=>
console.log(err.message+"hello"))