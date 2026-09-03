const fs = require("fs")
const path = require("path")
const users = require("../data/MOCK_DATA.json");
const mongoose = require('mongoose')

//Connection to mongoDB
mongoose.connect("mongodb://127.0.0.1:27017/testDB")
.then(()=>console.log("MongoDB connected!"))
.catch((err)=>console.log(err))
//Schema
const userSchema = new mongoose.Schema({
    first_name:{
        type:String,
        required: true
    },
    last_name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        required:true,
        uniue:true
    },
    gender:{
        type:String,
        required:true
    },
    ip_address:{
        type:String,
        required:true
    }
},{timestamps:true})
const USER = mongoose.model("user",userSchema)


const getUsers = async (req, res) => {
    // console.log(req.body)
    const users = await USER.find({})
    const html = `
    <ul style="list-style-type: none;">
    ${users.map((user) => {
        return `<li>${user.first_name}&nbsp;${user.last_name}&nbsp;${user.email}</li>`
    }).join("")}
    </ul>`
    res.send(html)
};
const getUser = async (req,res,next)=>{
    const users = await USER.find({})
    const userID = Number(req.params.id);
    const userIndex = users.findIndex(usr=>usr.id === userID)
    if (userIndex === -1) {
        const error = new Error("Resource not found")
        error.code = 404
        return next(error)
    }
    return res.status(200).send(users[userIndex]);  
}
const createUser = async (req, res, next) => {
    const users = await USER.find({})
    const user = { ...req.body, id: users.length + 1 }
    console.log("BODY: ",+req.body)
    if (!user.first_name || !user.last_name || !user.email || !user.id || !user.gender || !user.ip_address) {
        const error = new Error("Unprocessable Entity")
        error.code = 422
        return next(error)
    }
    // users.push(user)
    // fs.writeFile("./data/MOCK_DATA.json", JSON.stringify(users), (err) => {
    //     if (err) {
    //         err.message = "Internal Server Error"
    //         err.code = 500
    //         return next(err)
    //     }
    //     return res.status(201).json({ status: "success" })
    // })
    const result = await USER.create({
        first_name:user.first_name,
        last_name:user.last_name,
        email:user.email,
        gender:user.gender,
        ip_address:user.ip_address
    })
    console.log(result)
    return res.status(201).json({message:"successful creation of user"})
};
const deleteUser = (req, res, next) => {
    const id = Number(req.params.id);
    const userIndex = users.findIndex(usr => usr.id === id);
    if (userIndex === -1) {
        const error = new Error("Resource not found")
        error.code = 404
        return next(error)
    }
    users.splice(userIndex, 1);
    fs.writeFile("./data/MOCK_DATA.json", JSON.stringify(users), (err) => {
        if (err) {
            err.message = "Internal Server Error"
            err.code = 500
            return next(err)
        }
        return res.sendStatus(204);
    })

};
const updateUser = (req, res, next) => {
    const id = Number(req.params.id);
    const userIndex = users.findIndex(usr => usr.id === id);
    console.log("BODY:", req.body);
    console.log("UPDATED USER:", users[userIndex]);
    if (userIndex === -1) {
        const error = new Error("Resource not found")
        error.code = 404
        return next(error)
    }
    Object.assign(users[userIndex], req.body)
    fs.writeFile("./data/MOCK_DATA.json", JSON.stringify(users), (err) => {
        if (err) {
            err.message = "Internal Server Error"
            err.code = 500
            return next(err);
        }
        return res.status(200).json({message:"Successful patching"});
    })
};
module.exports = {
    getUsers, getUser, createUser, updateUser, deleteUser
};