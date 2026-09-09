import { userModel } from '../models/user.model.js'

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
    return res.render("index")
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
        return res.render('index',{
            message:"Successfully signed up!"
        });
    }
    catch(error){
        next(error)
    }
}

export {handleUserLogIn, handleUserSignIn}