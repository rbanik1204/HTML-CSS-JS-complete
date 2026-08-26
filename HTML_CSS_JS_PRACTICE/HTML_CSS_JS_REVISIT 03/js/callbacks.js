// import PromptSync from "prompt-sync";
// const prompt = promptSync();
// let a = prompt("What's your name?") // Synchronous JS
// let b = prompt("What's your year?") // Synchronous JS

//Asynchronous

console.log("start");

function loadScript(src, callBack) {
    let script = document.createElement("script");
    // script.type = module; //ESM Module
    script.src = src;
    script.onload = (script) => {
        // console.log(`${script.src} successfully downloaded but not executed!`)
        callBack(null, script)
    };
    script.onerror = (script) => callBack(new Error(`${script.src} got some error`));
    document.head.appendChild(script);
}
const hello = (error, script) => {
    if (error) {
        console.log(error.message + "\n" + error.name)
        return
    }
    else {
        setTimeout(() => {
            alert("I am inside callBack setTimeout and I'm the proof that " + script.src + " was valid!")
        }, 5000);
    }
}
loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js", hello)