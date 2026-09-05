const express = require('express')
const { connectMongoDB } = require("./connection")
const app = express()

const userRoutes = require("./routes/user.routes");

const logger = require("./middlewares/logger");
const globalError = require('./middlewares/globalError')


//Built-in Middlewares - Used for parsing from network pipelines
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//Request method and path logger
app.use(logger)

connectMongoDB("mongodb://127.0.0.1:27017/users");

app.use("/",userRoutes)


app.use(globalError)

module.exports = app