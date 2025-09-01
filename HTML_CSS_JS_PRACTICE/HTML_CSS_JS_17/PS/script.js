let form = document.getElementById("forms");
console.log(form.elements);
let x = (e) =>{
    alert(`This alert is popped by Submit`);
    console.log(e.type);
}
let y = (e) =>{
    alert(`This alert is popped by Reset`);
    console.log(e.type);
}
form.password.autocomplete = 'on';
form.Reset.addEventListener('click',y);
form.Submit.addEventListener('click',x);
