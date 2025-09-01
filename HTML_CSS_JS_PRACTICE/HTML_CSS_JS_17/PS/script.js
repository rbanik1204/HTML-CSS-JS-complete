// let form = document.getElementById("forms");
// console.log(form.elements);
// let x = (e) =>{
//     alert(`This alert is popped by Submit`);
//     console.log(e.type);
// }
// let y = (e) =>{
//     alert(`This alert is popped by Reset`);
//     console.log(e.type);
// }
// form.password.autocomplete = 'on';
// form.Reset.addEventListener('click',y);
// form.Submit.addEventListener('click',x);
// let elem1 = document.getElementById("google").addEventListener('click',function(){
//     let url = 'https://google.com/search?q=javascript';
//     let win = window.open(url,"","width=500,height=500,scrollbars=yes,resizeable=yes");
//     win.focus();
// });
// let elem2 = document.getElementById("twitter").addEventListener('click',function(){
//     let url = 'https://x.com';
//     let win = window.open(url,"","width=500,height=500,scrollbars=yes,resizeable=yes");
//     win.focus();
// });

// let elem3 = document.getElementById("fb").addEventListener('click',function(){
//     let url = 'https://facebook.com';
//     let win = window.open(url,"","width=500,height=500,scrollbars=yes,resizeable=yes");
//     win.focus();
// });
//I could have also used url = 'https:// ...'
//then just window.location = url;
let div = document.getElementsByClassName("container")[0]
setInterval(function(){
    div.classList.toggle('box');
},300);// setInterval is a globalFunction not a Dom METHOD remember this


