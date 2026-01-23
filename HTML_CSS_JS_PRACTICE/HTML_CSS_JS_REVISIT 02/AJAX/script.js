let btn = document.getElementById("btn")
btn.addEventListener('click',(e)=>{
    const xhttp = new XMLHttpRequest();
    xhttp.onload= (e)=>{
        btn.parentElement.innerText = xhttp.responseText
        console.log(xhttp.statusText)
        console.log(xhttp.getResponseHeader('content-type')) //null
        console.log(xhttp.getAllResponseHeaders())   
    }
    xhttp.open('GET','ajax.txt',true)
    // xhttp.setRequestHeader('Content-Type','text/plain') -> Unnecessary since it is required for POST requests
    xhttp.send()
})