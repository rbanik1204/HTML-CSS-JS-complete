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
    },
    role:{
        type:String,
        required:true,
        default:"NORMAL"
    }
    },
    {timestamps:true}  //Enables createdAt and updatedAt
)

const userModel = mongoose.model('user',userSchema)

export { userModel }