const http = require('http');
const server =http.createServer((req,res)=>{
    res.writeHead(200,{
        'access-control-allow-origin':'http://localhost:3000/',
        'access-control-allow-credentials':true,
        'cross-origin-resource-Policy':'cross-origin',
        'content-type':req.headers['content-type'] || 'text/plain'
    });
    res.end(`Hello from ${req.url}`);
});
const PORT = 5000;
server.listen(PORT,'localhost',()=>{
    console.log('Server running at http://localhost:5000/')
})