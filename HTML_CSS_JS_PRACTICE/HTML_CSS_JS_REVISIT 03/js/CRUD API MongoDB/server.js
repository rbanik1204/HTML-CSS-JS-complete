const app = require("./app")

app.listen(3000, "localhost", () => {
    console.log("server running at http://[::1]:3000/")
})