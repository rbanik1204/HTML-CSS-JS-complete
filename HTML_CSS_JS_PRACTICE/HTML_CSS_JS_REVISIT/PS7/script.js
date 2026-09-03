const fetchData = async (src)=>{
    return new Promise((resolve,reject)=>{
        fetch(src,{
            method:'GET',
            credentials:'include',
            headers:{
                'X-Client-Header':'ratul'
            }
        })
        .then(async (res)=>{
            console.log('Response header \'Content-Type\':'+res.headers.get('content-type'))//
            console.log('Response header \'X-User-Agent\':'+res.headers.get('X-User-Agent'))
            //Printing all server response headers
            for(let [key,value] of res.headers.entries()){
                console.log(`${key}`+":"+`${value}`)
            }
            console.log('The cookies sent from HTTP server SHOULD GIVE EMPTY');
            const data = await res.json();
            resolve(data);
        })
        .catch((err)=>{
            reject(err.message);
        })
    })
}
async function main (src){
    const Data = await fetchData(src);
    let elem = document.getElementsByClassName('div');
    elem[0].innerHTML = `The HTTP server resonse: <pre>${Data}</pre>`;
}
main('http://localhost:8000/')