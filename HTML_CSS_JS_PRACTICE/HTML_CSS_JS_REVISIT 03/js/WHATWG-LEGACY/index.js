const fs = require("fs").promises;
const http = require("http");
const { URL } = require("url"); //WHATWG API and it is WHATWG URL class & for legacy it is URL property of Node's url module
const express = require('express')
const app = express();
app.get("/",(req,res)=>{
    return res.send("Hello from From Home Page")
})
app.get("/about",(req,res)=>{
    return res.end("Hello from About Page" )
})
function writeToLog(req, res) {
    console.log(req.url)
    const parsedURL = new URL(req.url, "http://[::1]:3000")//WHATWG API
    //const parsedURL = URL.parse(req.url,true) is the legacy URL parser
    try {

        const editLog =
            `${new Date().toLocaleString()}: ${parsedURL.pathname} new Request received!\n`;

        fs.appendFile("edit.log", editLog, "utf8");

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
        case "/signup":
            if (req.method === "GET") res.end("This is a sign up form")
            else if (req.method === "POST") {
                //DB query
                res.end("success!");
            }
            break;
        default:
            res.statusCode = 404;
            res.end(`${res.statusCode} requested resource not found!`);
    }
}
// const server = http.createServer(app)

// server.listen(3000, "localhost", () => {
//     console.log("server running on PORT 3000");
// });
app.listen(3000,"localhost",()=>{
    console.log("Server Started!")
})