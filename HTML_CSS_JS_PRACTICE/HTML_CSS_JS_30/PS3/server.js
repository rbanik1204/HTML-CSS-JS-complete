const http = require('http');
const server = http.createServer((req,res)=>{
    console.log(`request Header(user-Agent):${req.headers['user-agent']}`);
    console.log(`request Header(X-Client-Header):${req.headers['X-Client-Header']}`)
    if(req.method === "GET" && req.url==='/Home'){
        res.setHeader('Content-Type','application/json');
        res.setHeader('X-Server-Header','HelloFromServer')
        res.setHeader('X-Powered-By','Node.js')
        res.writeHead(200,{
            'cache-control':'no-cache,no-store,must-revalidate',
            "Access-Control-Allow-Origin":'*',
            "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
            'set-cookie':'sessionId=abc123;username=ratul;HttpOnly',
            'Access-Control-Allow-Headers': 'Content-Type,user-agent,x-client-header',
            'Access-Control-Allow-Credentials': 'true'
        })
        res.end(JSON.stringify({message:'Server Running!'}))
    }
    else if(req.url==="/"){
        res.writeHead(404,{'Content-Type': 'application/json'});
        res.end(JSON.stringify({message:'Bad Request(client side Error 400 Statuscode)'}))

    }
    else{
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Not Found' }));
    }
    })
server.listen(5000,'localhost',()=>{
        console.log("Server running at http://localhost:5000/Home");
})