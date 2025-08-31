let elem = document.body.firstElementChild;
// console.log(elem.tagName.toLowerCase()); --> returns div
// document.body.innerHTML+= "<h1>This is added by innerHTML</h1>"
// let child = document.createElement("div");
// elem.appendChild(child);
// console.log(elem);
// // child.innerText = "Hello world";
let div = document.createElement("div");
div.innerHTML ="<h1>This is innerHTML Insertion</h1>"
//document.body.prepend(div);//makes it childNodes[0]
elem.prepend(div);

