//Asynchronoud Programming

function createScript(src,callBack){
    let script = document.createElement("script");
    script.src = src;
    script.onload = ()=>{//event-handler property 
        console.log("Successfully loaded script2:", script.src);// Check why script.src isnt working properly here (resolved!)
        callBack(null,script);
    }
    script.onerror = () =>{
        console.log("Check src:",src);
        callBack(new Error(`src ${src} has got fetching issues`),script.src);
        return;
    }
    document.head.appendChild(script);
}
function morning(error,src){
    if(error){
        console.log(`src ${src} can not be fetched!(from morning)`);
        return;
    }
    console.log("Hello From callBack Function");
}
createScript("script234.js",morning);