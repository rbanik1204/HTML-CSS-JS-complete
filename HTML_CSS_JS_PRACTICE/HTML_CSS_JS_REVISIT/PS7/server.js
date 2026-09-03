const http = require("http");

//Create Server

const server = http.createServer((req,res)=>{
    if(req.method==='OPTIONS'){
        res.writeHead(204,{
            "Access-Control-Allow-Origin":'http://127.0.0.1:3000',
            "Access-Control-Allow-Credentials":true,
            "Access-Control-Allow-Headers":'X-client-header',
            "Access-Control-Allow-Methods": "GET, POST, OPTIONS"
        })
        return res.end();
    }
    console.log(`The request header (X-Client-Header):${req.headers['x-client-header']}`); // always small letters in .headers[]
    res.writeHead(200,{
        "Access-Control-Allow-Origin":'http://127.0.0.1:3000',
        "Access-Control-Allow-Credentials":true,
        "Content-Type":"Application/json",
        "Access-Control-Expose-Headers": "X-User-Agent",
        "X-User-Agent":"Ratul",
        "Set-Cookie": "myCookie=hello; Path=/;SameSite=Lax"
    })
    // console.log(req.headers.cookie);
    res.end(JSON.stringify("Hello from server"));
})
const PORT = 8000
server.listen(PORT,()=>{
    console.log('Server listening at http://127.0.0.1:3000/index.html');
})