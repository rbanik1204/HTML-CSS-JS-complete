const fs = require("fs").promises;
const http = require("http");
const { URL } = require("url"); //WHATWG API and it is WHATWG URL class for legacy it is URL property of Node's url module


function writeToLog() {

    const server = http.createServer(async (req, res) => {
        console.log(req.url)
        const parsedURL = new URL(req.url, "http://[::1]:3000")//WHATWG API
        //const parsedURL = URL.parse(req.url,true) is the legacy URL parser
        try {

            const editLog =
                `${Date.now()}: ${parsedURL.pathname} new Request received!\n`;

            await fs.appendFile("edit.log", editLog, "utf8");

        } catch (err) {

            console.log(err);

        }

        switch (parsedURL.pathname) {

            case "/":
                res.end("Home page");
                break;

            case "/about":
                res.end("Hi! I'm ratul banik");
                break;
            default:
                res.statusCode = 404;
                res.end(`${res.statusCode} requested resource not found!`);
        }
    });

    server.listen(3000, "localhost", () => {
        console.log("server running on PORT 3000");
    });
}

writeToLog();