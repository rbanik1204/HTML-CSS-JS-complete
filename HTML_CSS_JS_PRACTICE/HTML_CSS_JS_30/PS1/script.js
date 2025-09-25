const FetchData = (src) => {
    fetch(src, {
        method: 'GET'
    })
        .then(res => console.log(res.json()))
        .catch(error => console.log(error.name + ":" + error.message + error.Stack));
}
let btn = document.getElementsByTagName('button')[0];
// btn.addEventListener('click', (event) => {
//     let data = FetchData('http://localhost:5000/api');
//     console.log(data);
//     btn.parentElement.innerHTML = data.message;
//     console.log(event.type+event.clientX,clientY)
// })
