const http = require('http');
const { URL } = require('url');
const fs = require('fs');
const server = http.createServer((req,res)=>{
    if(req.url==='/favicon.ico')
        return res.end();
    //WHATWG API
    const myUrl = new URL('http://127.0.0.1:8000/p/a/t/h?query=string#hash');
    console.log(myUrl.host,'\n',myUrl.pathname);
    console.log(myUrl.searchParams.get('query'))
    console.log(myUrl);
    //Legacy API 
    const parsedUrl = require('url').parse('http://127.0.0.1:8000/p/a/t/h?query=string#hash')
    console.log(parsedUrl.host);
    console.log(parsedUrl.query);
    console.log(parsedUrl);
    res.end();
})
// server.on('connection',(socket)=>{
//     console.log('New connection received!');
// })
server.listen(8000,()=>{
    console.log('Server listening at http://localhost:8000');
})
