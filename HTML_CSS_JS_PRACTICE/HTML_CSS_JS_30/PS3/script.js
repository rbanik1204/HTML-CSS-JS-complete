const FetchData = async (src)=>{
    return fetch (src,{
        method:'GET',
        credentials:'include',
        headers:{
            'user-agent':'abc1234',
            'X-Client-Header':'Hello from client side'
        }
    })
    .then((res)=>{
        console.log("Response Header (Content-Type):", res.headers.get("content-type"));
        console.log("Response Header(X-Server-Header):",res.headers.get('X-Server-Header'));
        // Printing all response headers
        for (let [key,value] of res.headers.entries()){
            console.log(key,":",value);
        }
        console.log('The cookies sent from the HTTP server:\n'+document.cookie);
        res.json();
        return res;
    })
}
async function main(src){
    const data = await FetchData(src);
    console.log("This is the response received from Server:",data.message);
}
main('http://localhost:5000/Home');