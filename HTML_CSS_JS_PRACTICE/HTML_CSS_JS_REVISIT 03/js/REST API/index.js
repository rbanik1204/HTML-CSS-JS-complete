const express = require('express')
const fs = require('fs');
const users = require("./MOCK_DATA.json")

const app = express()
const PORT = 3000

//Register middleware
app.use((req, res, next) => {
    console.log(req.method, req.url)
    next()
})
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.get("/users", (req, res) => {
    const html = `
        <ul> 
            ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
        </ul>
    `
    res.send(html);
})

app.post("/api/users", async (req, res) => {
    //TODO: Create new User
    users.push({ ...req.body, id: users.length + 1 })
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (error, data) => {
        return res.json({ status: "success", id:users.length })
    })

})
//Routes
app
    .route("/api/users/:id")
    .get((req, res) => {
        const id = Number(req.params.id);
        const user = users.find(user => user.id === id)
        return res.send(user)
    })
    .post((req, res) => {
        //TODO: Create user id 
        return res.json({ status: "pending" })
    })
    .patch((req, res) => {
        //TODO: Edit existing user using id
        return res.json({ status: "pending" })
    })
    .delete((req, res) => {
        //TODO: Delete user using id
        return res.json({ status: "pending" })
    })

app.listen(PORT, "localhost", () => {
    console.log(`Server running on PORT ${PORT}`);
})