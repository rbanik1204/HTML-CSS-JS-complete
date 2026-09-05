const express = require('express')
const { connectMongoDB } = require("./connection")
const app = express()
const Users = require("./models/users")
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

connectMongoDB("mongodb://127.0.0.1:27017/users");

app.get("/api/users", async(req, res, next) => {
    try {
        const users = await Users.find();
        const html = `
        ${users.map((user) => {
            return `<li>${user.firstName} ${user.lastName} ${user.email}</li>`
        })
                .join("")
            }
        `
        res.send(html)
    }
    catch (err) {
        next(err)
    }
})
app.post("/api/users/", async (req, res, next) => {
    try {
        await Users.insertMany(req.body)
        res.send(`<h2>Sucessful</h2>`);
    }
    catch (err) {
        next(err)
    }
})
app.use((err, req, res, next) => {
    console.log(err.message)
    res.sendStatus(500)
})

module.exports = app