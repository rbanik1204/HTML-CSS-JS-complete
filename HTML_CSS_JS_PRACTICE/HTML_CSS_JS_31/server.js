const http = require('http');

//Creating new server instance
const server = http.createServer((req,res)=>{
    console.log("New request received!");
    //Multi route
    switch(req.url){
        case '/':
            res.end("Home page");
            break;
        case '/contact':
            res.end("Contact us");
            break;
        // default:
        //     res.end("404 response not send from server");
    }
})
const PORT = 8000
server.listen(PORT,'127.0.0.1',()=>{
    console.log('Server listening!');
})