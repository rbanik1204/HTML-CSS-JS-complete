const elem = document.getElementById("button")
function loadDoc() {
    let xhttp = new XMLHttpRequest();
    xhttp.open('GET', 'button.txt?user=Ratul', true);
    // xhttp.upload.onprogress = function (event) { --> this is a progress handler which can be used to show upload percentage of data being uploaded onto the server
    //     console.log(event.total);
    //     console.log(event.loaded);
    // }
    xhttp.onload = function (event) {
        console.log(this.readyState);
        console.log(this.statusText); // we can also use status property
        // console.log(this.ok); --> xHttpRequest doesnt have ok property
        document.getElementsByClassName("Button")[0].innerHTML = this.responseText;
        // document.getElementsByClassName("Button")[0].innerHTML = this.getAllResponseHeaders();
    }
    xhttp.send();
}
elem.addEventListener("click", loadDoc);