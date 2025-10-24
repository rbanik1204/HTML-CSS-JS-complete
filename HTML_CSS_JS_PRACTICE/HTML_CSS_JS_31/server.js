const http = require('http');
const url = require('url');
const fs = require('fs');
//Creating new server instance
const server = http.createServer((req,res)=>{
    if (req.url === '/favicon.ico'){
        return res.end();
    }
    console.log("New request received from "+req.url);
    const Url = req.url;
    const myUrl = url.parse(Url,true);
    console.log(myUrl.query.user);
    console.log(myUrl);
    var log = `${Date.now()}: New Request from ${Url}\n`
    //Multi route
    fs.appendFile("log.txt",log,(err,data)=>{
    switch(myUrl.pathname){
        case '/':
            res.end("Home page");
            break;
        case '/contact':
            res.end("Contact us");
            break;
        default:
            res.end("404 response not send from server");
    }
    })
})
const PORT = 8000
server.listen(PORT,'127.0.0.1',()=>{
    console.log('Server listening!');
})