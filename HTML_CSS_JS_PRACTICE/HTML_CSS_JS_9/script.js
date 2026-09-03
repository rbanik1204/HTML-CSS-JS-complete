// changing card title to red
// let ctitle = document.getElementsByClassName("card-title");
// Array.from(ctitle).forEach(title => {
//     title.style.color = "red";
// });
//Remember getElementsByClassName returns a live HTMLCollection
// let ctitle = document.getElementById("cardTitle");
// ctitle.style.color = "red";
let ctitle = document.querySelectorAll(".card-title");
Array.from(ctitle).forEach(title => {
    title.style.color = "red";
});

//document.querySelector is more Efficient than querySelectorAll REMEMBER