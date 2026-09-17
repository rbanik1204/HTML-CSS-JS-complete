import {app} from './app.js'
const PORT = process.env.PORT || 4000
app.listen(PORT,"localhost",()=>{
    console.log(`server listening at ${PORT}`)
})