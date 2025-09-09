const loadScript = async (src)=>{
    let script = document.createElement("script");
    script.src = src;
    src.type = "text/javascript";
    document.appendChild(script);
    src.onload = ()=>{
        console.log(src+"loaded successfully!");
        return ("appended"+src);
    }
    src.error = ()=>{
        return (new Error(src+" has some serious issues"));
    }
}
loadScript(script2.js);