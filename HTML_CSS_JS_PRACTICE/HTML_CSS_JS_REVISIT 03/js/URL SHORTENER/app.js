import express from 'express' //ESM module
const app = express()
import urlRouter from './routes/urls.routes.js'
//External Middlewares
import { logger } from './middlewares/logger.js'
//Mongod connection
import connectMongoDB from './connection.js'
import { globalError } from './middlewares/globalError.js'
connectMongoDB("mongodb://127.0.0.1:27017/url")
//Built-in middlewares for request body parsing
app.use(express.json())
app.use(logger)
//Routes
app.use('/api',urlRouter)
app.use('/analytics',urlRouter)
app.use(globalError)
//export to server.js
export default app