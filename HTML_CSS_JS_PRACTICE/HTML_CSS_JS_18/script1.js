// //synchronous Programming
// let str="Hello World!"
// let val = 20;
// str = prompt("What's your age?")


//Asynchronous Programming

// setInterval(()=>{
//     console.log("What's up bud");
// },3000);// This Block of code will be executed first time after 3secs 
//For that time being all other statements will be executed even it is after the setInterval block

function loadScript(src,callback){
    let script = document.createElement("script");
    script.src = src;
    script.onload = () =>{
        alert('Loaded Script is '+src);
        callback(null,script);
    }
    script.onerror = () => {
        console.log("Error while fetching "+src);
        callback(new Error("src has got some error!"),script);
    }
    document.head.appendChild(script);
}
function hello(error,src)
{   if(error){
    console.log(error);
    return;
    }
    console.log("Hello from function hello "+src);
}
function morning(src){
    console.log("Good morning:",src);
}
loadScript('script2asef.js',hello);