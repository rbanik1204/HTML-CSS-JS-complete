import express from 'express'
import dotenv from 'dotenv'
import {logger} from './middlewares/logger.js'
import { globalError } from './middlewares/globalError.js'
import {paymentRouter} from './routes/payments.routes.js'
import {router as homeRouter} from './routes/home.routes.js'
dotenv.config()//Doubt

const app = express()
//Custom middleware for HTTP method,route logging
app.use(logger)
//Built-in middlewares for request body parsing
app.use(express.json())
app.use(express.urlencoded({extended:false}))


//Routes
app.use("/api/payments",paymentRouter)
app.use('/',homeRouter)

app.use(globalError)
export {app}