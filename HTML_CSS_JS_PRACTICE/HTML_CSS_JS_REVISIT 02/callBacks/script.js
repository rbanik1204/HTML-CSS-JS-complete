// //Synchronous Action
// console.log("This is executed right away!")
// console.log("Synchronous actions doesnt wait and gets executed according to the execution flow")
// //Asynchronous action
// console.log("Start")
// const timerId = setTimeout(()=>{
//     console.log("This is executed after 3 seconds")
// },3000)
// console.log(`End`)
//CallBack Functions
function loadScript(src,callBack){
    console.log('Inside loadScript')
    const script = document.createElement('script')
    script.src = src
    script.onload = (e)=>{
        console.log("Successful!")
        console.log("Loaded script:"+script.src)
        callBack(null,script)
    }
    script.onerror = (e)=>{
        console.log('Error incurred!')
        callBack(new Error("Error while fetching:"+script.src))

    }
    document.head.appendChild(script)
}
function Checker(err,script){
    if(err){
        console.log(`${err.message}`)
    }
    else
        alert(`${script.src} has successfully loaded!`)
}
loadScript('script2.js',Checker)