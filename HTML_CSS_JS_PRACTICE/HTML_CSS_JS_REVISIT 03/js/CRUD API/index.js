const express = require("express")
const fs = require("fs")
const path = require("path")
const app = express()
require("dotenv").configDotenv()
const users = require("./data/MOCK_DATA.json")
//Middlewares
app.use((req, res, next) => {
    console.log(req.method + req.path);
    next()
})
// app.use(express.urlencoded({ extended: true }))
//Routes
app.get("/users", (req, res) => {
    // console.log(req.body)
    const html = `
    <ul style="list-style-type: none;">
    ${users.map((user) => {
        return `<li>${user.first_name}&nbsp;${user.last_name}&nbsp;${user.email}</li>`
    }).join("")}
    </ul>`
    res.send(html)
});

//Middleware error Handler 404 Global Error Handler
app.use((req, res, next) => {
    res.sendStatus(404);
})
//Server Listener 
const PORT = process.env.PORT || 3000
app.listen(PORT, "localhost", () => {
    console.log("server running on ", PORT)
})
