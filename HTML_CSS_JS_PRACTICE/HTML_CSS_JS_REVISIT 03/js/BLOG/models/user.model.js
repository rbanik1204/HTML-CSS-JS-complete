import {Schema,model} from 'mongoose'

const userSchema = new Schema({
    fullName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    username:{
        type:String,
        required:true,
        unique:true
    },
    salt:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    profileImageURL:{
        type:String,
        required:true,
        default:
    },
    role:{
        type:String,
        enum:{
            values:["ADMIN","USER"]
        },
        required:true
    }
},{timestamps:true})

const User= model("user",userSchema)// compiled constructor class that provides prgramming interface to run CRUD queries it represents the collection as a whole

export default User