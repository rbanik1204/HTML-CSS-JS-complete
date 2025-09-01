let elem = document.body.firstElementChild;
// elem.onclick =() =>{alert(`Submitted Successfully!`);}
let x = function(e){
    console.log(e.target)
    console.log(e.type,e.clientX,e.clientY);
    console.log(`Hello World!`);
    console.log(e.currentTarget);
}

elem.addEventListener('click',x);