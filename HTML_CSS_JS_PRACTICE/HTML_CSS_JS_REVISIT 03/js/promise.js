const loadScript = (src) => {
    let Script = document.createElement("script");
    Script.type = "text/javascript";
    Script.src = src;
    return new Promise((res, rej) => {
        Script.onload = (event) => {
            res(event.target);
        };
        Script.onerror = (event) => {
            rej(new Error(`${event.target.src} did not download`))
        };
        document.head.appendChild(Script);
    })
}
loadScript("script3.js").then((value) => {
    console.log(`${value.src} appended successfully!`)
}, (err) => {
    console.log("Error:"+err.message)
})