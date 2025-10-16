const loadScript = (src,callBackFn)=>{
    const script = document.createElement('script');
    script.src = src;
    script.onload = (e)=>{
        console.log(`${src} loaded successfully`);
        callBackFn(src,null);
    }
    script.onerror = ()=>{
        callBackFn(src,new Error(`${src} cannot be loaded`));
    }
    document.body.appendChild(script);
}
function validationFn(src,error){
    if(error){
        console.log(error.name+":",error.message);
        return;
    }
    else{
        console.log(`callBackFn executed successfully! ${src}`);
    }
}
loadScript('index1.js',validationFn)
