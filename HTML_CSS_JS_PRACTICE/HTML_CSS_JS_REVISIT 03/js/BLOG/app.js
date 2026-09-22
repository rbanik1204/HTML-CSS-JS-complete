import express from 'express'
import dotenv from 'dotenv'
import { connectToDB } from './configs/mongo.config.js'
import path from 'path'
import { fileURLToPath } from 'url'
import { logger } from './middlewares/logger.js'
import homeRouter from './routes/home.routes.js'
import User from './models/user.model.js'
import { globalError } from './middlewares/globalError.js'
dotenv.config({
    silent:true,
    quiet:true
})
//Connection to MONGODB
connectToDB(process.env.MONGO_URI)
const app = express()

// Custom Middlewares
app.use(logger)

//Built-in middlewares for request body parsing
app.use(express.json())
app.use(express.urlencoded({extended:false}))

//ESM work around __dirname doesnt exist
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

//Static directory serving
app.use(express.static(path.resolve(__dirname,"./public")))//No prefix stripping requires

//Set Template engine
app.set("view engine","ejs")
app.set("views",path.join(__dirname,"./views"))

// Routes



app.use('/',homeRouter)

//Global Error Handler
app.use(globalError)
export default app 