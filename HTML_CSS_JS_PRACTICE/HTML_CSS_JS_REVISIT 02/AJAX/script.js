let btn = document.getElementById("btn")
btn.addEventListener('click',(e)=>{
    const xhttp = new XMLHttpRequest();
    xhttp.onload= (e)=>{
        btn.parentElement.innerText = xhttp.responseText
        console.log(xhttp.statusText)
        console.log(xhttp.getResponseHeader('Content-type')) //null   
    }
    xhttp.open('GET','ajax.txt',true)
    xhttp.setRequestHeader('Content-Type','text/plain')
    xhttp.send()
})