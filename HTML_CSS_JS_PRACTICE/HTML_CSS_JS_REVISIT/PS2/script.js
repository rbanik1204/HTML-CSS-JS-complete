function loadScript(src,callBackFn){
    let myPromise = new Promise((myResolve,myReject)=>{
        let script = document.createElement('script');
        script.src = src;
        script.onload = ()=>{
            myResolve(src)
        }
        script.onerror = ()=>myReject(new Error(`Error in loading ${src}`))
        document.getElementsByClassName('container')[0].appendChild(script);
    })
    myPromise.then((res)=>{
        document.getElementsByClassName('container')[0].innerHTML+= `<i>Hello from ${res}</i></br>`
    },
    (err)=>{
        document.getElementsByClassName('container')[0].innerHTML+= `<i>${err.message}</i></br>`
        return;
    }
    )
    const timerId = setTimeout(callBackFn,2000,src)
    document.getElementsByClassName('container')[0].innerHTML+= `<i>${timerId}</i>`
        
}
loadScript('script2.js',function validationFn(src){
    document.getElementsByClassName('container')[0].innerHTML+= `<i>Hello from ValidationFn ${src}</i></br>`
})