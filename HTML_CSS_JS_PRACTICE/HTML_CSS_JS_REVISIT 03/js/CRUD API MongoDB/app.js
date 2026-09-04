const express = require('express')
const dotenv = require('dotenv')
const {connectMongoDB} = require("./connection")
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

connectMongoDB("mongodb://127.0.0.1:27017/")
app.get("/", (req, res, next) => {
    try { 
        console.log(req.body)
        res.send("Hello from Express Server") 
    }
    catch (err) {
        next(err)
    }
})
app.use((req, res, next, err) => {
    console.log(err.message)
})

module.exports = app