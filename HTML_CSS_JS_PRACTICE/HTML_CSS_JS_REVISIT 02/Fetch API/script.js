async function loadDoc(url){
    return new Promise(async (resolve,reject)=>{
        const data = await fetch(url);
        resolve(data)
    })
}
let outer = document.body.firstElementChild.nextElementSibling;
let btn = outer.firstElementChild.getElementsByTagName('input')[0]
btn.addEventListener('click',async (event)=>{
    let myData = await loadDoc('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&daily=weather_code&hourly=temperature_2m')//api URL
    //myData is actually the resolved data ******************
    // console.log(myData) ->Is promise object
    // myData = myData.text()
    // btn.parentElement.innerHTML = `${myData}`
        // myData.then(value=>{value.text()
        //     return value
        // })
        // myData.then(val=>{
        //     btn.parentElement.innerHTML = `${val}`
        // })
        //----------------------Promises automatically unwrap (flatten) other promises-----------------------------
    //console.log(myData.text()) //---------IT IS ALSO INCORRECT.-----------
    //IT IS ASYNC ACTION 
    //It returns a Promise{<pending>} it hasnt resolved yet!
    //------------------It returns a Promise that resolves to the body string-----------------------------------
    let response = await myData.json();
    console.log(response)
    // btn.parentElement.innerHTML = `<pre>${JSON.stringify(response, null, 2)}</pre>`
})
