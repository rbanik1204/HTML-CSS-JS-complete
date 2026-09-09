import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        unique:true,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true
    }},
    {timestamps:true}  //Enables createdAt and updatedAt
)

const userModel = mongoose.model('user',userSchema)

export { userModel }