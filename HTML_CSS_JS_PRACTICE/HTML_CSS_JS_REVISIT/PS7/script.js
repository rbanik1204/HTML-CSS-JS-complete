const fetchData = async (src)=>{
    return new Promise((resolve,reject)=>{
        fetch(src,{
            method:'GET',
            credentials:'include',
            headers:{
                'Content-Type':'Application/json'
            }
        })
        .then((res)=>res.json())
    })
}
async function main (src){
    const Data = await fetchData(src);
    let elem = document.getElementsByClassName('div');
    elem[0].innerHTML = `<pre>${Data}</pre>`;
}
main('http://localhost:3000/')