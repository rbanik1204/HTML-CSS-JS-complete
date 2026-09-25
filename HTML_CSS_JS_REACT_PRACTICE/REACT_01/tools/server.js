import http from "node:http"
const server = http.createServer((req,res)=>{
    res.writeHead({"Content-Type":"text/plain"})
    res.end("Hello from Development Server")
})
server.listen(3000,"localhost",()=>{
    console.log("Server listening at PORT:3000")
})