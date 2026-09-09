import { userModel } from '../models/user.model.js'
import {v4 as uuidv4} from 'uuid'
import {setId,getId} from '../services/auth.users.js'
async function  handleUserLogIn (req,res,next){
    try{
    const body = req.body;
    const user = await userModel.findOne({
        $and:[{
            username:body.username},
            {password:body.password}
        ]
    })
    if(!user) return res.status(422).render('login',{
        message:"Please sign up with the below link"
        ,url:"signup"
    })
    const sessionId = uuidv4()
    setId(sessionId,user)
    req.user = user
    res.cookie("uid", sessionId);
    return res.redirect("/test")
    }
    catch(error){
        next(error)
    }
}

async function handleUserSignIn(req,res,next){
    try{
        const body = req.body;
        const userInstance = new userModel({
            username:body.username,
            email:body.email,
            password:body.password
        })// Mongoose Document instance . Stored in Nodes process memory 
        const existingUser = await userModel.findOne({username:userInstance.username,email:userInstance.email})
        if(!existingUser)
            await userInstance.save();
        else{
            return res.render('signup',{
                message:'User already exists. Please Login',
                url:'http://[::1]/users/login'
            })
        }
        const sessionId = uuidv4();
        setId(sessionId,userInstance)
        console.log("I'm inside user.controller:",getId(sessionId))
        res.cookie("uid",sessionId)
        // return res.render('index',{
        //     message:"Successfully signed up!"
        // });//Double submit problem
        return res.redirect('/test')//GET request on /test
    }
    catch(error){
        next(error)
    }
}

export {handleUserLogIn, handleUserSignIn}