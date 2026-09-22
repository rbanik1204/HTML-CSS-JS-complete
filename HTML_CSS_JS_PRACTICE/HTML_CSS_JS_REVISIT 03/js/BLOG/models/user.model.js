import {Schema,model} from 'mongoose'

const userSchema = new Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    role:{
        type:String,
        enum:{
            values:["ADMIN","USER"]
        },
        required:true
    }
})

const User= model("user",userSchema)// compiled constructor class that provides prgramming interface to run CRUD queries it represents the collection as a whole

export default User