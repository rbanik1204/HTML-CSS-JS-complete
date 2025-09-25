const http = require('http');
const server = http.createServer((req, res) => {
    if (req.url === '/api') {
        res.writeHead(200, {
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "*"
        })
        res.end(JSON.stringify({ message: "Hello from backend!" }))
    }
});
const PORT = 5000;
server.listen(PORT, 'localhost', () => {
    console.log("Server is listening at http://localhost:" + PORT + "/");
})
