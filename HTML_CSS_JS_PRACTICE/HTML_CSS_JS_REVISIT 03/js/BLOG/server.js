import app from './app.js'

app.listen(process.env.PORT,"localhost",()=>{
    console.log("Server running at PORT:"+process.env.PORT)
})