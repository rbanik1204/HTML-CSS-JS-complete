const express = require('express');
const path = require('path');

const app = express();
// app.use('/static', (req, res, next) => {
//     console.log(req.method, req.url);
//     next();
// });
// app.use('/static',express.static('public'))
// app.use('/static',(req,res,next)=>{
//     console.log(req.method,req.path)
// },express.static("public"))

// app.get('/static/:dir1/:dir2',(req,res)=>{
//     console.log(req.method,req.params.dir1,req.params.dir2)
//     res.send("route reached")
// })
//Middleware
app.use(express.json())
app.get("/",(req,res)=>{
    res.send("Home");
})
app.get("/users/:id",(req,res)=>{
    const id = req.params.id;
    res.json({
        id:id
    });
})
app.post("/users",(req,res)=>{
    const user = req.body
    res.status(201).json({
        message: "user created",
        user: user
    });
})
app.use((req,res)=>{
    res.sendStatus(404);
})
app.listen(3000)