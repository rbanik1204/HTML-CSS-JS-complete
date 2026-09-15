const express = require('express')
const dotenv = require('dotenv').config();
const app = express();

app.get('/',(req,res,next)=>{
    return res.send("Hello World!")
})
const PORT = process.env.PORT || 4000
app.listen(PORT,"localhost",()=>{
    console.log(`server listening at ${PORT}`)
})