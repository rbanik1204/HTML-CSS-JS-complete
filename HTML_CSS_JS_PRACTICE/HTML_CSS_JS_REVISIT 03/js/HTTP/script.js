import http from 'http'

const server = http.createServer((req,res)=>{
    console.log("New HTTP request received!")
    res.writeHead(200,{
        'Content-Type':'text/plain'
    });
    res.end("Hello from Server!")
})
//Define PORT to listen on
const PORT = 3000

server.listen(PORT,'localhost',()=>{
    console.log("Server started!")
})