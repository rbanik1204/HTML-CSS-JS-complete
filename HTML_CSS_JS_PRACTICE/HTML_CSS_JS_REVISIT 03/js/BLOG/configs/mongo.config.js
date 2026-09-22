import mongoose from 'mongoose'

export async function connectToDB(uri) {
    const tempVar = await mongoose.connect(uri)
    if(tempVar) console.log("Mongo Daemon Connected Successfully")
    else throw new Error("Mongo Daemon Connection failed")
}