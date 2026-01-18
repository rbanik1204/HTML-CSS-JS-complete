async function loadScript(src,callBack){
    const script = document.createElement('script')
    script.src =src
        script.onload = (e)=>{
            console.log(script.src+" Successfully loaded!")
        }
        script.onerror =(e)=>{
            console.log(script.src+" not found!")
            callBack(new Error('Script not found'))
        }
        document.head.appendChild(script)
        return false
    }
function fallBack(err){
    console.log(err)
}
function main(){
    const myPromise = loadScript('',fallBack)
        .then((val)=>{
            console.log(val)
        })
}
main()