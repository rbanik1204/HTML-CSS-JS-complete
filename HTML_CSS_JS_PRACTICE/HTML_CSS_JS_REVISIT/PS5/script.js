let elem = document.getElementsByClassName('container')[0]
function loadDoc(){
    const xhr = new XMLHttpRequest();
    xhr.open('GET','button.txt?user=Ratul',true);
    xhr.setRequestHeader('Content-Type','text/html; charset=utf-8')
    xhr.onreadystatechange = function (){
        console.log('Current readyState:'+this.readyState);
    }
    xhr.onload = function() {
        console.log('HTTP Response status:'+this.status)
        responseDoc(xhr);
    }
    xhr.send();
}
elem.addEventListener('click',loadDoc)
function responseDoc(xhttp){
    console.log(xhttp.responseText)
    elem.innerHTML = `<pre>${xhttp.responseText}</pre>`
    console.log(xhttp.getAllResponseHeaders());
    //Cross-Origin-Resource-Policy:cross-origin   --->This allows other domains to request or use the resource of generated response
}