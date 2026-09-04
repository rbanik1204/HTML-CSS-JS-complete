//Connection to mongoDB
const mongoose = require('mongoose')
async function connectMongoDB(url) {
    return await mongoose.connect(url)
}
module.exports = {
    connectMongoDB
}


// .then(()=>console.log("MongoDB connected!"))
// .catch((err)=>console.log(err))