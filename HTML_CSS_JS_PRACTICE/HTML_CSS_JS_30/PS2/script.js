const fetchData = (src)=>{
    return fetch(src,{
        method:'GET',
        credentials:'include'
    })
    .then(resolve=>resolve.json())
}
async function main(src){
    let elem = document.getElementsByClassName('container');
    elem[0].firstElementChild.addEventListener('click',async ()=>{
        const data = await fetchData(src);
        elem[0].innerHTML = `<b>${data.message}</b>`;
    })
}
main('http://localhost:5000/home');