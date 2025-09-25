const http = require('http');
const server = http.createServer((req, res) => {
    if (req.url === '/home') {
        res.writeHead(200, {
            'Content-Type': 'application/json'
            , 'access-control-allow-credentials': 'true',
            'access-control-allow-origin':'http://127.0.0.1:3000'
        })
        res.end(JSON.stringify({message:'Successfully Running!'}));
    }
})
const PORT = 5000;
server.listen(PORT, 'localhost', () => {
    console.log(`Server Running at http://localhost:${PORT}/home`);
})